const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const passport = require('passport')

// Load profile model
const Profile = require('../../models/Profile')

// Load user profile
const user = require('../../models/User')

// Load validation
const validateProfileInput = require("../../validations/profile")


// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => {
    res.json({
        message: "Profile Works"
    })
})

// @route   GET api/profile/
// @desc    Get current user profile
// @access  Private
router.get("/", passport.authenticate('jwt', {session:false}), (req, res) => {
    const errors = {}
    Profile.findOne({ user : req.user.id})
        .then(profile => {
            if(!profile){
                errors.noprofile = "There is no profile for this user"
                return res.status(404).json(errors)
            }
            res.json(profile)
        })
        .catch(err => res.status(404).json(err))
})


// @route   GET api/profile/
// @desc    Create user profile
// @access  Private
router.post("/", passport.authenticate('jwt', {session:false}), (req, res) => {

    console.log(req.body)
    const {errors, isValid} = validateProfileInput(req.body)

    // check validations
    if(!isValid){
        return res.status(400).json(errors)
    }

    // Get fields
    const profileFields = {}
    profileFields.user = req.user.id
    if(req.body.handle){
        profileFields.handle = req.body.handle
    }
    if(req.body.company){
        profileFields.company = req.body.company
    }
    if(req.body.website){
        profileFields.website = req.body.website
    }
    if(req.body.location){
        profileFields.location = req.body.location
    }

    // sKills- split into array
    if(typeof req.body.skills !== "undefined"){
        profileFields.skills  = req.body.skills.split(',')
    }
    
    // Social
    profileFields.social = {}
    if(req.body.youtube){
        profileFields.social.youtube = req.body.youtube
    }
    if(req.body.twitter){
        profileFields.social.twitter = req.body.twitter
    }
    if(req.body.facebook){
        profileFields.social.facebook = req.body.facebook
    }
    if(req.body.linkedin){
        profileFields.social.linkedin = req.body.linkedin
    }
    if(req.body.instagram){
        profileFields.social.instagram = req.body.instagram
    }
    Profile.findOne({user: req.user.id})
        .then(profile => {
            if(profile){
                // update
                profile.findOneAndUpdate({user: req.user.id}, {$set : profileFields}, {new: true})
                .then(profile => res.json(profile))
            } else {
                // Create

                // Check if handle exit
                Profile.findOne({handle: profileFields.handle}).then(profile => {
                    if(profile){
                        errors.handle = "That habdle already exist"
                        res.status(400).json(errors)
                    }
                    // Save the profile
                    console.log(profileFields, "Prog")
                    new Profile(profileFields).save().then(profile => res.json(profile))
                })
            }
        })
})



module.exports = router