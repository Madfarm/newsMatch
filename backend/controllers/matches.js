const { User } = require('../models')

module.exports = {
    create
}

async function create(req,res){
    try {
        let user = await User.findById(req.params.id);
        
        await user.matches.push(req.body)

        res.status(201).json(await user.save())
    } catch(err){
        res.status(400).json({error: err.message})
    }
}