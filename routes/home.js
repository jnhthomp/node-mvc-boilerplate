const express = require('express') // express package for generating router object
const router = express.Router() // Initialize express router object
const homeController = require('../controllers/home') // import homeController object containing controller methods

// add routes and associated controller methods to this router before exporting (paths relative to root)
router.get('/', homeController.getIndex)

// export created router
module.exports = router