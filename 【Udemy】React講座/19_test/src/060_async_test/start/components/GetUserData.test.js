import { render, screen, waitFor } from "@testing-library/react";
import GetUserData from "./GetUserData";
import axios from 'axios';  // axiosをモックするためにインポート
import { ENDPOINT_URL } from "../Example";

// axiosをモック
jest.mock('axios');

describe('GetUserDataコンポーネントの動作確認', () => {
    test('外部データ取得中', () => {
        render(<GetUserData url={ENDPOINT_URL} />);
        const h1El = screen.getByRole('heading', {
            name: '通信中です!'
        });
        expect(h1El).toBeInTheDocument();
    });

    test('外部データ取得後', async () => {
        // モックしたレスポンスデータを定義
        const mockData = {
            data: {
                id: 1,
                name: "CodeMafia"
            }
        };

        // axiosのGETリクエストをモックし、レスポンスデータを返す
        axios.get.mockResolvedValueOnce(mockData);

        render(<GetUserData url={ENDPOINT_URL} />);

        // 'プロフィール'というheadingが表示されるのを待つ
        const h2El = await screen.findByRole('heading', {
            name: 'プロフィール'
        });
        expect(h2El).toBeInTheDocument();

        // リストアイテムの内容を確認
        const itemEl = await screen.findAllByRole('listitem');
        expect(itemEl[0].textContent).toBe("ID: 1");
        expect(itemEl[1].textContent).toBe("Name: CodeMafia");
    });
});
