import React from "react";
import MyProfilePic from "../../components/MyProfilePic";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import Image from "next/image";

const generateMetadata = ({ params }: { params: { postId: string } }) => {
    const posts = getSortedPostsData(); // deduped!  Next JS caches requests, so no extra overhead
    const { postId } = params;

    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }
    return {
        title: post.title,
    };
};

const Posts = async ({ params }: { params: { postId: string } }) => {
    const posts = getSortedPostsData(); // deduped!  Next JS caches requests, so no extra overhead
    const { postId } = params;

    if (!posts.find((post) => post.id === postId)) {
        return notFound();
    }

    const { title, date, contentHtml } = await getPostData(postId);

    const formattedDate = getFormattedDate(date);

    return (
        <div className="flex flex-col justify-between align-center">
            <MyProfilePic />
            <main className="px-6 mx-auto prose ">
                <h1 className="text-3xl mt-4 mb-0">{title}</h1>
                <p className="mt-0">{formattedDate}</p>
                <article>
                    <section
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                    <p>
                        <Link href="/">⬅ Back to home</Link>
                    </p>
                </article>
            </main>
        </div>
    );
};

export default Posts;
