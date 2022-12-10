import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/post";

const Post = ({
    postData,
}: {
    postData: {
        title: string;
        data: string;
        contentHtml: string;
    };
}) => {
    return (
        <div>
            <head>
                {" "}
                <title>{postData.title}</title>
            </head>
            <article>
                {/* <h1 className={homeStyles.headingXl}>{postData.title}</h1>
                <div>{postData.date}</div>
                <div dangerouslySetInnerHTML={{ _html: postData.contentHtml }}></div> */}
            </article>
        </div>
    );
};

export default Post;

export const getStaticPath: GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);

    return {
        props: {
            postData,
        },
    };
};
