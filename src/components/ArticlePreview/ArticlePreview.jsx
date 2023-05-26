import "./ArticlePreview.scss"
import { Button } from "@mui/material"
import PropTypes from 'prop-types';

const ArticlePreview = ({ articleTitle, articleDescription, articleCategory, articleAuthor }) => {

    const handleNavigateToArticle = () => {
        console.log("I will jump to article");
    }

    const handleNavigateToAuthor = () => {
        console.log("I will navigate to the authors page");
    }

    return (
        <div className="article-preview-container">
            <div className="article-thumbnail">
                <img src="https://picsum.photos/150/200" onClick={handleNavigateToArticle} />
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
    articleAuthor: PropTypes.string,
    articleDescription: PropTypes.string,
    articleCategory: PropTypes.string,
}

ArticlePreview.defaultProps = {
    articleTitle: "Prop Article Title",
    articleAuthor: "Prop Author",
    articleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    articleCategory: "Prop category",
}

export default ArticlePreview;