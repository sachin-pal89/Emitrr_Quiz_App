import User from "../models/userModel.js";
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

//@desc Register new user
//@route POST /signup
//@access public
const registerUser = asyncHandler(async (req, res) => {

    const { fullname, username, password, lang_name } = req.body

    if (!fullname || !username || !password || !lang_name) {
        res.status(400)
        throw new Error("Please fill all fields")
    }

    // Check if user exists already
    const userExists = await User.findOne({ username })

    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        fullname,
        username,
        password: hashedPassword,
        lang: [{
            lang_name,
        }],
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            fullname: user.fullname,
            username: user.username,
            password: user.password,
            lang: user.lang
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc Login user
//@route POST /login
//@access public
const loginUser = asyncHandler(async (req, res) => {

    const { username, password } = req.body

    if (!username || !password) {
        res.status(400)
        throw new Error('Invalid username or password')
    }

    const user = await User.findOne({ username })

    const passwordCheck = await bcrypt.compare(password, user.password)

    if (user && passwordCheck) {
        res.status(200).json(user)
    }
    else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})

//@desc change user password
//@route POST /changePassword
//@access public
const changePassword = asyncHandler(async (req, res) => {

    const { username, newPassword } = req.body

    if (!username || !newPassword) {
        res.status(400)
        throw new Error('Provide new and old username')
    }

    const user = await User.findOne({ username })

    if (user) {

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newPassword, salt)

        const userNewPass = await User.findOneAndUpdate(
            { username: username}, // Replace with the actual username
            { $set: { password: hashedPassword } },
            { new: true } // Return the updated document
        );

        if (userNewPass) {
            res.status(200).json(userNewPass);
        } else {
            res.status(400)
            throw new Error("Can't update the password")
        }
    }
    else {
        res.status(400)
        throw new Error("user not found")
    }
})

//@desc reset courses
//@route POST /resetCourse
//@access public
const resetCourse = asyncHandler( async (req, res) => {

    const { username, lang_name } = req.body

    if(!username || !lang_name) {
        res.status(400)
        throw new Error("Give complete details")
    }

    const user = await User.findOne({ username })

    if(user){

        const userResetLang = await User.findOneAndUpdate(
            {username: username, 'lang.lang_name': lang_name},
            {$set: {
                    'lang.$.score': 0,
                    'lang.$.curr_question_no': 0
                },
            },
            {new: true}
        );

        if(userResetLang){
            res.status(200).json(userResetLang);
        } else {
            res.status(400)
            throw new Error("Cannot Reset")
        }
    }
    else {
        res.status(400)
        throw new Error("Cannot find the user");
    }
})

const getUser = asyncHandler(async (req, res) => {

    const user = await User.find({})

    if (user) {
        res.status(200).json(user)
    }
    else {
        res.status(401)
        throw new Error("Not found")
    }
})

export { registerUser, loginUser, changePassword, resetCourse, getUser }