import { server } from '../config'
import { ArticleList } from '../components/ArticleList'
export default function About({ articles }) {
	return (
		<div>
			<div className="container">
				<h1>Articles</h1>
				<h3>We are...</h3>
				<ArticleList articles={articles} />
			</div>
		</div>
	)
}
// export const getStaticProps = async () => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
// 	const articles = await res.json()

// 	return {
// 		props: {
// 			articles,
// 		},
// 	}
// }

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`)
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	}
}
