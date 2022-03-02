import headerStyles from '../styles/Header.module.css'
import React from 'react'

const Header = (props) => {
	const x = 6
	return (
		<div>
			<h1 className="title">
				<span>EmpireComputing.NET</span>
			</h1>
			<p className={headerStyles.description}>
				Keep up to date with the latest in tech
			</p>
			<style jsx>
				{`
					.title {
						color: ${x > 4 ? 'red' : 'blue'};
					}
				`}
			</style>
		</div>
	)
}

export default Header
