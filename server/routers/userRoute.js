import express from 'express'
import { registerUser, loginUser, changePassword, updateScore, newCourse, resetCourse, getUser } from '../controllers/userController.js'

const router = express.Router()

router.route('/login')
    .post(loginUser)

router.route('/signup')
    .post(registerUser)

router.route('/changePassword')
    .post(changePassword)

router.route('/updateScore')
    .post(updateScore)

router.route('/newCourse')
    .post(newCourse)

router.route('/resetCourse')
    .post(resetCourse)

router.route('/')
    .get(getUser)

export default router