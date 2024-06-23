const db = require("../model")
const Users = db.Users

const ListingUsers = async (req, res) => {
	try {
		const data = await Users.findAll();
		if (! data) {
			res.status(204).json({error: true, message: "Not found data"});
		}
		res.status(200).json({status: true, data: data});
	} catch (error) {
		res.status(400).json({ message: "Invalid url"+error});
	}
}


module.exports = {
    ListingUsers
}