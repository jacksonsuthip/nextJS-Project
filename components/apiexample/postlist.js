import Link from "next/link"
import Head from 'next/head'

export default function Postlist({ listDetails }) {
    console.log("props-listDetails", listDetails);
    return (
        <div >
            <Head>
                <title>Api-Test</title>
            </Head>
            {
                listDetails.map((val, i) => (
                    // <Link href="/post/[id]" as={`/post/${posts.id}`}>
                    <ul key={i}>
                        <li>{val.id} - {val.title}</li>
                    </ul>
                    // </Link>
                ))
            }
        </div>
    )
}

