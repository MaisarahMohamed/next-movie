import Footer from './footer';
import NavBar from './navbar';
import React from 'react'

const Layout = ({children}) => {
	return (
	<>
		<NavBar />
		{children}
		<Footer />
	</>
	)
}

export default Layout;