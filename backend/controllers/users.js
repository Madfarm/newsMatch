const { User } = require('../models');

module.exports = {
    create,
    show,
    index
}

async function create(req,res){
    try {
        res.status(201).json(await User.create(req.body))
    } catch(err){
        res.status(400).json({error: err.message})
    }
}

async function index(req,res){
    try {
        res.status(200).json(await User.find().populate('matches'))
    } catch(err){
        res.status(400).json({error: err.message})
    }
}

async function show(req,res){
    try {
        res.status(200).json(await User.findById(req.params.id))
    } catch(err){
        res.status(400).json({error: err.message})
    }
}