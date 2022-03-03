import { ArticleItem } from './ArticleItem'
import articleStyle from '../styles/Article.module.css'

export const ArticleList = ({ articles }) => {
	return (
		<div className={articleStyle.grid}>
			{articles.map((article) => (
				<ArticleItem article={article} />
			))}
		</div>
	)
}
