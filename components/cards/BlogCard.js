/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Link from 'next/link';

const BlogCard = ({ post }) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <h5>{post.uri}</h5>
            <img src={post.featuredImg} alt="" />
            <p>{post.date}</p>
            <p>{post.author}</p>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
            <p>{post.categories}</p>
        </div>
    );
};

export default BlogCard;
