const { User } = require('../models')

module.exports = {
    create,
    destroy
}

async function create(req,res){
    try {
        let user = await User.findOne({auth_id: req.params.id});
        
        await user.matches.push(req.body)

        res.status(201).json(await user.save())
    } catch(err){
        res.status(400).json({error: err.message})
    }
}

async function destroy(req,res){
    try {
        let user = await User.findOne({auth_id: req.body.authId});
        
        await user.matches.remove(req.params.id)

        res.json(await user.save())

    } catch(err){
        res.status(400).json({error: err.message})
    }
}



