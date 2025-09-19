export default {
	myFun1 () {
		get_country.run().then(dt => {
			showAlert("" + dt[0].country)
		})
		showAlert("HI");
	},
	async newFunc() {
		const country = await get_country.run()
		await showAlert("" + country[0].country)
		await showAlert("Hi")
	},
	async demoDependency() {
		let resp = await get_country.run()
		const country = resp[0].country
		let count = await get_users_count_by_country.run({ country })
		return count
	},
	async parallelQueries () {
		let data = await Promise.all(get_country.run(), get_users_count_in_canada.run())
	}
}