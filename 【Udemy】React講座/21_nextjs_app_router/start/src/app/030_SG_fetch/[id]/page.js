import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

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


export async function generateStaticParams() {
  const data = await fetch(ENDPOINT).then(res => res.json());
  console.log(data);
  return data.map(record => ({id:record.id}))
}

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}
