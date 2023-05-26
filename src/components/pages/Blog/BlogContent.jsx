import ArticlePreview from "../../ArticlePreview/ArticlePreview";
import "./BlogContent.scss";

const BlogContent = () => {
  return (
    <div className="blog-container">
      <div className="blog-header-container">
        <h1>Blog page title</h1>
      </div>
      <div className="blog-articles-container">
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />


      </div>
    </div>
  );
};

export default BlogContent;
