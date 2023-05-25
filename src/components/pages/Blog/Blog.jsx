import React from "react";
import { Helmet } from "react-helmet-async";
import BlogContent from "./BlogContent";

const Blog = () => {
    return ( 
        <>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <BlogContent />
        </>
     );
}
 
export default Blog;







