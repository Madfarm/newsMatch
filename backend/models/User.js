const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    image: String
}, {timestamps: true})

const userSchema = new mongoose.Schema({
    auth_id: String,
    matches: [articleSchema]
}, {timestamps: true})



module.exports = mongoose.model('User', userSchema)
