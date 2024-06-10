
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div className="mt-6">
      <div className="">
        {/* <img src={mainImg} className="h-[430px] w-full" alt="mainImage" /> */}
        <h1 className="title-text text-center text- ">
          Blogs
        </h1>
      </div>

      {/* Featured Blogs */}
      <div className="container  mt-12">
        {blogPosts
          .filter((blog) => blog.isFeatured)
          .map((post) => (
            <Link
              // href={`/blogs/${post.id}`}
              to={`/blog/${post.id}`}
              key={post.id}
              className="block xl:flex gap-6 p-4"
            >
              <img
                src={`${post.featured_image}`}
                alt="my-img"
                className="w-full xl:w-[500px] rounded-[14px]"
              />
              <div className="">
                <h2 className="my-2 xl:mb-2 subtitle-text font-bold text-gray-800">
                  {post.title.split(".")}
                </h2>
                <p className="mb-2 text-blue-500">{post.publish_date}</p>
                <p className="small-text opacity-80">{post.content}</p>
              </div>
            </Link>
          ))}
      </div>
      {/* Normal blogs */}
      <div className="container mt-8 grid grid-cols-1  xl:grid-cols-3">
        {blogPosts
          .filter((blog) => !blog.isFeatured)
          .map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="p-4 "
            >
              <img
                // src={`${img1}`}
                src={`${post.featured_image }`}
                alt="my-img"
                className="rounded border border-gray-200 w-full h-[230px] object-cover"
              />
              <div className="">
                <h2 className="my-4 subtitle-text font-bold text-gray-800">
                  {post.title.split(".")}
                </h2>
                <p className="mb-2 text-blue-500">{post.publish_date}</p>
                <p className="text-justify text-sm text-gray-600 opacity-80">
                  {post.content}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Blogs;

interface BlogsList {
  id: number;
  title: string;
  publish_date: string;
  content: string;
  featured_image: string;
  detailsImg?: string;
  isFeatured: boolean;
}

export const blogPosts: BlogsList[] = [
  {
    id: 1,
    title:
      "Mastering Financial Organization: Essential Tips for Businesses in Nepal",
    publish_date: "18 Dec, 2023",
    content:
      "Organizing your business finances is crucial for success. From proper bookkeeping to tax planning, mastering financial organization can help ensure your business runs smoothly. In this post, we share essential tips for businesses in Nepal to stay financially organized and compliant with local regulations.",
    featured_image: "/images/heroimg.webp",
    detailsImg: "/images/heroimg.webp",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Navigating Nepal's Tax System: A Guide for Small Businesses",
    publish_date: "11 May, 2023",
    content:
      "Understanding the tax system in Nepal can be challenging for small businesses. This guide breaks down the different types of taxes, filing requirements, and deadlines to help you stay compliant and avoid penalties. Learn how to navigate the tax landscape effectively with our expert tips.",
    featured_image: "/images/ourvision.jpg",
    detailsImg: "/images/image.webp",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Strategic Financial Planning for Long-Term Business Success",
    publish_date: "27 Dec, 2022",
    content:
      "Long-term success requires strategic financial planning. This post explores key strategies for financial planning, including budgeting, forecasting, and investment planning. Discover how to create a robust financial plan that supports sustainable growth and profitability for your business in Nepal.",
    featured_image: "/images/financialplanning.jpg",
    detailsImg: "/images/financialplanning.jpg",

    isFeatured: false,
  },
  {
    id: 4,
    title: "Auditing Essentials: Ensuring Accuracy and Compliance",
    publish_date: "23 Feb, 2024",
    content:
      "Regular audits are essential for ensuring financial accuracy and compliance. This post covers the basics of auditing, common challenges, and best practices. Learn how to prepare for an audit and maintain accurate financial records to meet regulatory standards in Nepal.",
    featured_image: "/images/image.webp",
    detailsImg: "/images/image.webp",

    isFeatured: false,
  },
];
