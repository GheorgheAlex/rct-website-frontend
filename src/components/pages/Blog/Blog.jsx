import React from "react";
import { Helmet } from "react-helmet-async";
import BlogContent from "./BlogContent";
import { strings } from "../../../utils/strings.js"

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>{strings.blog.helmetTitle}</title>
            </Helmet>
            <BlogContent />
        </>
    );
}

export default Blog;







