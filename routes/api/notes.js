const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/notes'
router.get('/', notesCtrl.index)
router.post('/create', ensureLoggedIn, notesCtrl.create)

// POST /api/users
// router.post ('/', usersCtrl.create)

module.exports = router
