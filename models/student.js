const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    name : {

        type : String,
        require 
    },
    email : {

        type : String,
        require 
    },
    password : {

        type : String,
        require 
    },
    password : {

        type : String,
        require 
    },
    role : {

        type : String,
        default : "student"
    }
})
const StudentModel = mongoose.Model('student',StudentSchema)

module.exports = StudentModel