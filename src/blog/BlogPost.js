import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import remarkGfm from "remark-gfm";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


const BlogPost = () => {
    const { id } = useParams();
    const markdownFile = require(`./blog-posts/${id}.md`);

    const [mdData, setMdData] = useState("");
    async function fetchChangelog() {
        await fetch(markdownFile).then((response) => response.text()).then((text) => {
            setMdData(text)
        })
    }
    useEffect(() => {

        fetchChangelog()

    }, [])




    return (

        <section className="block text-gray-600 body-font">
            <div className="blog text-black mx-auto flex flex-col gap-4 px-5 py-24 align-center">
                <Link to="/blog">
                    <BsFillArrowLeftCircleFill style={{ width: "48px", height: "48px", marginTop: "10px" }} />
                </Link>
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">{id}</h1>
                <div className="container mx-auto px-4">
                    <div className=" p-4 relative z-10 w-full">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} >
                            {mdData}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </section>






    );
};

export default BlogPost;
