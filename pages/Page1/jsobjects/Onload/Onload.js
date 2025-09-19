export default {
	async main() {
		Get_Users.run()
		get_country.run()
		
		// more
	},
	async getGenderRatio() {
		get_gender_ratio_by_country.run()
	}
}