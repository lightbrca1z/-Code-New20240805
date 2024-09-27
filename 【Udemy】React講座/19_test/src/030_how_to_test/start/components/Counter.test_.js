import { render, screen, fireEvent } from '@testing-library/react'
import Counter from "./Counter"

/* POINT テストコードを書く際の注意点
Arrage:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/

test('カウントアップボタンで結果が+1されるか', () => {
    // Arrage
    render(<Counter originCount={0} />);

    // Act
    const btn = screen.getByRole('button', {name : 'カウントアップ'});
    fireEvent.click(btn);

    //Assertion
    const spanEl = screen.getByText('現在のカウント:1');
    expect(spanEl).toBeInTheDocument();
})
