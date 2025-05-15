const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
            require
        },

        email:
        {
            type: String,
            require
        },

        password:
        {
            type: String,
            require
        },

        role:
        {
            type: String,
            require
        },

        name:
        {
            type: String,
            default: "admin"
        },
    })


const Adminmodel = mongoose.model('admin', AdminSchema)
module.exports = Adminmodel