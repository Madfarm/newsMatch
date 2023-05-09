const express = require('express');
const router = express.Router();



router.route('/')
.get((req,res)=> res.send("Hitting user index route"))
.post((req,res)=> res.send("Hitting user create route"))


router.route('/:id')
.get((req,res)=> res.send("Hitting user show route"))



module.exports = router