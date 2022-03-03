import Head from 'next/head'
import { ArticleList } from '../components/ArticleList'
export default function About({ articles }) {
	return (
		<div>
			{/* <Head>
				<title>Mark's Sandbox</title>
				<meta name="keywords" content="web dev, programming" />
			</Head> */}
			<div className="container">
				<h1>Articles</h1>
				<h3>We are...</h3>
				<ArticleList articles={articles} />
			</div>
		</div>
	)
}
export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	}
}
