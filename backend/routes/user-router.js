const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users')

router.route('/')
.get(userCtrl.index)
.post(userCtrl.create)


router.route('/:id')
.get(userCtrl.show)



module.exports = router