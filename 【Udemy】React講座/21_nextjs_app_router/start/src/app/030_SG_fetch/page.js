import { ENDPOINT } from "@/constants";
import ArticleList from "../../components/articleList";

// 動的にメタデータを生成
export async function generateMetadata() {
  const articles = await fetch(ENDPOINT, { cache: "no-store" }).then((res) =>
    res.json()
  );

  // 最初の記事を使ってメタデータを生成する例
  const article = articles && articles.length > 0 ? articles[0] : null;

  if (article) {
    return {
      title: article.title,   // 最初の記事のタイトル
      description: article.text,  // 最初の記事のテキスト（説明）
    };
  } else {
    return {
      title: "記事がありません",   // 記事がない場合のタイトル
      description: "データが取得できませんでした。", // デフォルトの説明
    };
  }
}

// ページコンポーネント
export default async function Page() {
  const articles = await fetch(ENDPOINT, { cache: "no-store" }).then((res) =>
    res.json()
  );

  if (!articles || articles.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <>
      <h3>フェッチ&SG</h3>
      <ArticleList basePath="/030_SG_fetch" list={articles} />
    </>
  );
}
