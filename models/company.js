const mongoose = require('mongoose')

const companySchema = mongoose.Schema ({
    name : {

        type : String,
        require
    },
    email : {

        type : String,
        require
    },
    passsword : {

        type : String,
        require
    },
    role : {

        type : String,
        default : "company"
    },
})

const CompanyModel = mongoose.model('company',companySchema)

module.exports = CompanyModel