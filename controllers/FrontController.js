const AdminModel = require ('../models/admin');
const bcrypt = require('bcrypt');


class FrontController{
    static home =async(req,res)=>{
        try {
            res.render("home")
        } catch (error) {
            console.log(error)
        }
    }

    static about =async(req,res)=>{
        try {
            res.render("about")
        } catch (error) {
            console.log(error)
        }
    }
    static contact =async(req,res)=>{
        try {
            res.render("contact")
        } catch (error) {
            console.log(error)
        }
    }
    static login =async(req,res)=>{
        try {
            res.render("login")
        } catch (error) {
            console.log(error)
        }
    }

    static register =async(req,res)=>{
        try {
            res.render("register")
        } catch (error) {
            console.log(error)
        }
    }

    static dashboard =async(req,res)=>{
        try {
            res.render("dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    static registerAdmin =async(req,res)=>{
        try {
            // console.log(req.body)
            const{name,email,password} = req.body
            const hashPassword = await bcrypt.hash(password,10)
            const result = await AdminModel.create({
                name,
                email,
                password:hashPassword
            })
            res.redirect('/login')  //web
        } catch (error) {
            console.log(error)
        }
    }

}
module.exports =FrontController