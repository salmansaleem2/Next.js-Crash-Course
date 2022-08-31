import articleStyles from "../styles/Article.module.css";

// component
import ArticleItem from "./ArticleItem";

const Article = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default Article;
