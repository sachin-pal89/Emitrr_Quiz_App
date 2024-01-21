import express from 'express';
import { setNewQuiz, setQuizQuestion, getQuizQuestions, getAllQuizQuestions, getLeaderboard } from '../controllers/langController.js';

const router = express.Router();

router.route('/new')
    .post(setNewQuiz)

router.route('/addQuestion')
    .post(setQuizQuestion)

router.route('/questions')
    .post(getQuizQuestions)

router.route('/allQuestions')
    .get(getAllQuizQuestions)

router.route('/leaderboard')
    .post(getLeaderboard)

export default router;