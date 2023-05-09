const express = require('express')
const router = express.Router()



router.route('/user/:id/matches')
.post((req,res)=> res.send("Hitting match create route"))



module.exports = router;