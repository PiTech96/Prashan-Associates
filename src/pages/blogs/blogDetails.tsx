import { useParams } from "react-router-dom";
import { blogPosts } from "./blogs";
import { useEffect, useState } from "react";

interface BlogsList {
    id: number;
    title: string;
    publish_date: string;
    content: string;
    featured_image: string;
    detailsImg?: string;
    isFeatured: boolean;
}

function BlogDetails() {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<BlogsList | null>(null);
    console.log(blogPosts);

    useEffect(() => {
        const currentBlog = blogPosts.find((blog) => blog.id === parseInt(id ?? "")); // default as empty string
        setBlog(currentBlog || null);
    }, [id]);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="container">
            <h1 className="text-center subtitle-text my-12">{blog.title}</h1>
            <img className="w-full  object-cover h-[500px] rounded-sm" src={blog.detailsImg} alt={blog.title} />
            <div className="my-6" dangerouslySetInnerHTML={{ __html: blog.content }} />
            <p className="text-right my-2">{blog.publish_date}</p>
        </div>
    );
}

export default BlogDetails;
