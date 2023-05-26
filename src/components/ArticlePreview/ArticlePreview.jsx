import "./ArticlePreview.scss"
import { Button } from "@mui/material"
import { strings } from "../../utils/strings.js"
import PropTypes from 'prop-types';

const ArticlePreview = ({ articleTitle, articleThumbnail, articleDescription, articleCategory, articleAuthor }) => {

    const handleNavigateToArticle = () => {
        console.log("I will jump to article");
    }

    const handleNavigateToAuthor = () => {
        console.log("I will navigate to the authors page");
    }

    return (
        <div className="article-preview-container">
            <div className="article-thumbnail">
                <img src={articleThumbnail} onClick={handleNavigateToArticle} />
            </div>
            <div className="article-preview-content">
                <div className="article-header">
                    <h2 onClick={handleNavigateToArticle}>{articleTitle}</h2>
                    <p className="article-category">{articleCategory}</p>
                </div>
                <div className="article-author">
                    <h3 onClick={handleNavigateToAuthor}>{articleAuthor}</h3>
                </div>
                <div className="article-description">
                    <p>{articleDescription}</p>
                </div>
            </div>
        </div >
    );
}

ArticlePreview.propTypes = {
    articleTitle: PropTypes.string,
    articleThumbnail: PropTypes.string,
    articleAuthor: PropTypes.string,
    articleDescription: PropTypes.string,
    articleCategory: PropTypes.string,
}

ArticlePreview.defaultProps = {
    articleTitle: strings.blog.articlePreviewComp.defaultTitleProp,
    articleThumbnail: strings.blog.articlePreviewComp.defaultArticleThumbnailProp,
    articleAuthor: strings.blog.articlePreviewComp.defaultArticleAuthorProp,
    articleDescription: strings.blog.articlePreviewComp.defaultArticleDescriptionProp,
    articleCategory: strings.blog.articlePreviewComp.defaultArticleCategoryProp,
}

export default ArticlePreview;