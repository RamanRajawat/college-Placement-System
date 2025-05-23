const express = require('express')
const FrontController = require('../controllers/FrontController')
const StudentController = require('../controllers/StudentController')
const HodController = require('../controllers/HodController')
const CompanyController = require('../controllers/CompanyController')
const checkAuth = require('../middleware/auth')
const route =express.Router()



route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/contact',FrontController.contact)
route.get('/login',FrontController.login)
route.get('/register',FrontController.register)
route.get('/dashboard',checkAuth,FrontController.dashboard)

//insert admin
route.post('/registerAdmin',FrontController.registerAdmin)
route.post('/verifyLogin', FrontController.verifyLogin)


// student controller 
route.get('/student/display',StudentController.display)


// HOD controller
route.get('/hod/display', HodController.display)

// company controller 
route.get('/company/display', CompanyController.display)







module.exports =route