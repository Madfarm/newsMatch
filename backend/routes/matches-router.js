const express = require('express')
const router = express.Router()

const matchCtrl =  require('../controllers/matches')

router.route('/user/:id/matches')
.post(matchCtrl.create)

router.delete('/matches/:id', matchCtrl.destroy)



module.exports = router;