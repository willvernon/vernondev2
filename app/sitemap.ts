	const routes = ['', '/projects', '/blog', '/uses'].map((route) => ({
		url: `https://vernondev.com${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	return [...routes, ...blogs]
}
