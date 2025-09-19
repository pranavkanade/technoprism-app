export default {
	async update_User () {
		const selectedRowIdx = users_table.selectedRowIndex
		await update_user_by_id.run()
		await Get_Users.run();
		users_table.setSelectedRowIndex(selectedRowIdx)
	}
}