const express = require('express')
const router = express.Router()

const matchCtrl =  require('../controllers/matches')


router.delete('/user/:authid/matches/:id', matchCtrl.destroy)

router.route('/user/:id/matches')
.post(matchCtrl.create)




module.exports = router;