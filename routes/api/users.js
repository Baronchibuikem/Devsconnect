const express = require("express")
const router = express.Router()
const gravatar = require("gravatar")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const passport = require('passport')

// Load user model
const User = require("../../models/User")


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({message: "users Works"}))

// @route   GET api/users/registration
// @desc    Register User
// @access  Public
router.post("/register", (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                return res.status(400).json({
                    error: "Email already exist"
                })
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
    const email = req.body.email
    const password = req.body.password

    // find user by email
    User.findOne({email})
        .then(user=>{
            // check for user
            if(!user){
                return res.status(404).json({email:"User not found"})
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
                        return res.status(400).json({password: "Password incorrect"})
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