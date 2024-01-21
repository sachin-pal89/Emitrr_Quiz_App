import express from 'express'
import { registerUser, loginUser, changePassword, newCourse, resetCourse, getUser } from '../controllers/userController.js'

const router = express.Router()

router.route('/login')
    .post(loginUser)

router.route('/signup')
    .post(registerUser)

router.route('/changePassword')
    .post(changePassword)

router.route('/newCourse')
    .post(newCourse)

router.route('/resetCourse')
    .post(resetCourse)

router.route('/')
    .get(getUser)

export default router