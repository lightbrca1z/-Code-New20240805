# -*- coding: utf-8 -*-

def main():
    while True:
        print("以下の選択肢から数字を入力してください（終了するには 'exitprogram' と入力してください）:")
        print("1: おはようございます, 2: こんにちは, 3: こんばんは")
        print("***********")
        try:
            # 入力を取得して明示的に文字列として扱う
            user_input = str(input("数字を入力してください: ")).strip()

            # 入力が "exitprogram" だった場合、終了する
            if user_input.lower() == "exitprogram":
                print("プログラムを終了します。")
                break

            print("***********")
            
            # 入力値が数字かどうかを確認
            if user_input.isdigit():  # 数字のみで構成されているかをチェック
                choice = int(user_input)
                if choice == 1:
                    print("出力：おはようございます")
                elif choice == 2:
                    print("出力：こんにちは")
                elif choice == 3:
                    print("出力：こんばんは")
                else:
                    print("出力：無効な選択です。1, 2, 3のいずれかを入力してください。")
            else:
                print("有効な数字を入力するか、'exitprogram' と入力してください。")
        except Exception as e:
            # 予期しないエラーの処理
            print(f"エラーが発生しました: {e}")
        finally:
            print("***********")

if __name__ == "__main__":
    main()
