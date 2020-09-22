const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load user model
const User = require("../../models/User");

// Load input validation
const validateRegisterInput = require("../../validations/register");
const validateLoginInput = require("../../validations/login");
const Profile = require("../../models/Profile");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ message: "users Works" }));

// @route   GET api/users/registration
// @desc    Register User
// @access  Public
router.post("/register", async (req, res) => {
  // destructing validateRegisterInput
  const { errors, isValid } = validateRegisterInput(req.body);
  // check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // check if email already exist
  let user = await User.findOne({
    email: req.body.email,
  });
  if (user) return res.status(400).send("Email already exists");
  // avatar = gravatar.url(req.body.email, {
  //     s: "200", //Size
  //     r: "pg", //Rating
  //     d: "mm" //Default
  // })
  else
    user = new User({
      name: req.body.name,
      email: req.body.email,
      // avatar,
      password: req.body.password,
    });
  // hash the password
  const salt = await bcrypt.genSalt(20);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.json({ user });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT token
// @access  Public
router.post("/login", (req, res) => {
  // destructing validate
  const { errors, isValid } = validateLoginInput(req.body);
  // check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { email, password } = req.body;
  // find user by email
  User.findOne({ email }).then((user) => {
    // check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    // check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
        }; //Create jwt payload
        // Sign Token
        jwt.sign(
          payload,
          process.env.SECRETOKEN,
          { expiresIn: "7d" },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
