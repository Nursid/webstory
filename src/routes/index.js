const router = require('express').Router()

const userController = require('../controller/userController');
router.get("/listing-users",userController.ListingUsers )

    
module.exports = router