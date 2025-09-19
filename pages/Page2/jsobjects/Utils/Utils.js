export default {
	downloadDummy() {
		Get_Users100.run({ offset: 0, limit: 100 })
		showAlert("Dummy function called")
	},
	GetCountryOptions() {
		return Get_Unique_Countries.data.map(dt => ({
			key: dt.country,
			value: dt.country,
		}))
	},
}