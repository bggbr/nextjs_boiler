import { GetStaticProps } from "next";
import Head from "next/head";

import Link from "next/link";
import { getSortedPostsData } from "../lib/post";
import homeStyles from "../styles/Home.module.css";

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}) {
    return (
        <div className={homeStyles.container}>
            <Head>
                <title className=''>BOB</title>
            </Head>
            <section className={homeStyles.headingMd}>
                <p>[BOB Introduction]</p>
                <p>(This is a website)</p>
            </section>
            <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
                <h2 className={homeStyles.headingLg}>Blog</h2>
                <ul className={homeStyles.list}>
                    {allPostsData.map(({ id, title, date }) => (
                        <li className={homeStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                                <br />
                                <small className={homeStyles.lightText}>{date}</small>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};
