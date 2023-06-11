import React from 'react';
import { Link } from 'react-router-dom';
import totalPosts from "./blog-posts/total-posts.json";
function Blog() {
    return (




        <section className="text-gray-600 w-full body-font h-full">
            <div className="container px-5  mt-24 mx-auto flex flex-col items-center gap-4">
                <h1 className='SkillBox text-center text-black title font-bold text-4xl m-0'>
                    BLOG
                </h1>

                <div className="container mx-auto px-4">
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                        {totalPosts.map((post, key) => (
                            <Link to={"/blog/" + post.link} key={key} className="flex items-center border-black border-4 p-4 m-1 rounded-lg">
                                <div className="flex-grow">
                                    <h2 className="text-black title-font font-medium">{post.title}</h2>
                                    <p className="text-gray-900">{post.date}</p>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog



