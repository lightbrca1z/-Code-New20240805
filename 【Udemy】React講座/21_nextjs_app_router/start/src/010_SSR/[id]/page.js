// import './lib';
// import ClientComp from "./components/ClientComp";
import { ENDPOINT } from '@/constants';
import Article from '@/components/article';

export default async function SSR({ params }) {
    console.log(params);
    const article = await fetch(`${ENDPOINT}/${params.id}`, {
        next: { revalidate: 10 }
    }).then(res => res.json());
    return (
        <>
            <div>SSR Page</div>
            {/* <ClientComp /> */}
            <Article data={article} />
        </>
    )
}