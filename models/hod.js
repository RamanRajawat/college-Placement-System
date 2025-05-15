const mongoose = require('mongoose')

const hodSchema = mongoose.Schema ({
    name : {

        type :String,
        require
    },
    email : {

        type :String,
        require
    },
    passsword : {

        type :String,
        require
    },
    role : {

        type :String,
        default : "hod"
    },
})

const HodModel = mongoose.model("hod",hodSchema)

module.exports = HodModel