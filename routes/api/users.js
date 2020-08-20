const express = require("express")
const router = express.Router()
const gravatar = require("gravatar")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const passport = require('passport')
const {check, validationResult} = require("express-validator");

// Load user model
const User = require("../../models/User")

// Load input validation
const validateRegisterInput = require("../../validations/register")
const validateLoginInput = require("../../validations/login")


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({message: "users Works"}))

// @route   GET api/users/registration
// @desc    Register User
// @access  Public
router.post("/register", (req, res) => {
    // destructing validate
    const { errors , isValid} = validateRegisterInput(req.body)

    // check Validation
    if(!isValid){
         return res.status(400).json(errors)}
 
    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                errors.email = "Email already exist"
                return res.status(400).json(errors)
            }
                const avatar = gravatar.url(req.body.email, {
                    s: "200", //Size
                    r: "pg", //Rating
                    d: "mm" //Default
                })
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                });

                // hashing the password before saving
                bcrypt.genSalt(10, (err, salt)=> {
                    console.log(newUser, salt)
                    bcrypt.hash(newUser.passsword, salt, (err, hash)=> {
                        if(err) throw new Error(err);
                        // if no error, we set the password to the hash password
                        newUser.passsword = hash
                        // we save the user
                        newUser.save()
                            .then(use => {res.json(user)})
                            .catch(err => console.log(err))
                    })
                })
            }
        )
})


// @route   GET api/users/login
// @desc    Login User / Returning JWT token
// @access  Public
router.post("/login", (req, res)=>{
    // destructing validate
    const { errors , isValid} = validateLoginInput(req.body)

    // check Validation
    if(!isValid){
            return res.status(400).json(errors)}

    const email = req.body.email
    const password = req.body.password
    

    // find user by email
    User.findOne({email})
        .then(user=>{
            // check for user
            if(!user){
            errors.email = "User not found"
                return res.status(404).json(errors)
            }
            // check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        // User Matched

                        const payload = {id: user.id, name: user.name, avatar: user.avatar} //Create jwt payload
                        // Sign Token
                        jwt.sign(
                            payload, 
                            process.env.SECRETOKEN, 
                            {expiresIn: 3600}, (err, token)=>{
                             res.json({
                                 success: true,
                                 token: "Bearer " + token
                             })
                        })
                    }else{
                        errors.password ="Password incorrect"
                        return res.status(400).json(errors)
                    }
                })
        })
})


// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get("/current", passport.authenticate('jwt', {session: false}), (req, res) =>{
    res.json({
        id : req.user.id,
        name: req.user.name,
        email: req.user.email
    })
})


module.exports = router