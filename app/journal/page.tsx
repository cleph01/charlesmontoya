import React from "react";
import MyProfilePic from "../components/MyProfilePic";
import { getSortedPostsData } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";
import BlogItem from "../components/BlogItem";
import Image from "next/image";

const Posts = () => {
    const posts = getSortedPostsData();

    return (
        <div className="flex flex-col justify-between align-center">
            <MyProfilePic />
            <section className="mt-6 mx-auto max-w-2xl">
                <h2 className="text-4xl font-bold mb-4 text-center">Journal</h2>
                <ul className="w-full">
                    {posts.map((post) => (
                        <div className="flex flex-col sm:flex-row border shadow-md p-4 mb-4">
                            <Image
                                alt={post.title}
                                src={post.image}
                                width={200}
                                height={200}
                            />
                            <BlogItem post={post} />
                        </div>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Posts;
