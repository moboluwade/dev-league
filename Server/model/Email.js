const mongoose = require('mongoose')
const Schema = mongoose.Schema


const emailschema = new Schema({
    Email :{
     type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => /^[\w.+\-]+@([\w-]+\.)+[\w-]$/,
      message: 'Invalid email format'
    }}
    
}, { timestamps: true })


module.exports = mongoose.model('Useremail' , emailschema)