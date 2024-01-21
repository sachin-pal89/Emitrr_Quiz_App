import Lang from '../models/langModel.js';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';


//@desc new Lang Quiz
//@route POST /lang/new
//@access public
const setNewQuiz = asyncHandler( async (req, res) => {

    const { lang_name } = req.body

    if(!lang_name) {
        res.status(400)
        throw new Error("Given complete details for Quiz")
    }

    // Check if quiz is already there or nor for a lang
    const quiz = await Lang.findOne({ lang_name })

    if(quiz){
        res.status(400)
        throw new Error('Quiz for this Languague already exists')
    }
    else {

        const new_Lang = await Lang.create(
            {
                lang_name,
                total_question: 0,
                total_score: 0,
                questions: [],
            }
        );

        if(new_Lang){
            res.status(200).json(new_Lang)
        }
        else {
            res.status(400)
            throw new Error('Can`t create the new quiz');
        }
    }
})


//@desc add question for quiz
//@route POST /addQuestion
//@access public
const setQuizQuestion = asyncHandler( async (req, res) => {

    const { lang_name, question, options, answer, level, score } = req.body

    if(!lang_name || !question || !options.length || !answer || !level || !score){
        res.status(400)
        throw new Error('Provide complete details on question')
    }

    // Check for which lang this is
    const lang = await Lang.findOne({ lang_name })

    if(lang) {

        let last_question_no;
        
        if(lang.questions.length > 0) {
            const last_question = lang.questions[lang.questions.length - 1];
            last_question_no = last_question.question_no;
        }
        else {
            last_question_no = 0;
        }

        const newQuesion = {
            question_no: last_question_no + 1,
            question: question,
            options: options,
            answer: answer,
            level: level,
            score: score,
        }

        const updatedLang = await Lang.updateOne(
            { lang_name: lang_name},
            {
                $push: { questions: newQuesion},
                $inc: { total_question: 1, total_score: score}
            },
            {new: true}
        )

        if(updatedLang){
            res.status(200).json(updatedLang)
        }
        else {
            res.status(400)
            throw new Error("Can`t add the question")
        }
    }
    else {
        res.status(400)
        throw new Error('No Such Language found')
    }
})


//@desc get quiz questions
//@route POST /lang/questions
//@access public
const getQuizQuestions = asyncHandler( async (req, res) => {

    const { lang_name } = req.body;

    if(!lang_name){
        res.status(400)
        throw new Error("Provide the language name")
    }

    // Getting quiz questions 
    const lang = await Lang.findOne({ lang_name })

    if(lang){
        res.status(200).json(lang)
    }
    else {
        res.status(400)
        throw new Error("Language quiz doesn't exists")
    }
})


//@desc Get LeaderBoard
//@route POST /lang/leaderboard
//@access public
const getLeaderboard = asyncHandler( async (req, res) => {

    const { lang_name } = req.body

    if(!lang_name) {
        res.status(400)
        throw new Error("Provide valid Language")
    }

    // Get the User as per score in Language quiz
    const lang = await Lang.findOne({ lang_name })

    if(lang) {

        // get the user for this language quiz in descending order of their score
        const leaderboardUser = await User.aggregate([
            { $match: { 'lang.lang_name': lang_name }},
            { $unwind: '$lang'},
            { $match: { 'lang.lang_name': lang_name }},
            { $sort: { 'lang.score': -1, 'fullname': 1 } },
        ]);

        if(leaderboardUser){
            
            const leaderboardData = leaderboardUser.map((user) => ({
                username: user.username,
                score: user.lang.score,
            }))

            res.status(200).json(leaderboardData);
        }
        else{
            res.status(400)
            throw new Error('Leaderboard not found')
        }
    }
    else {
        res.status(400)
        throw new Error('Language not found')
    }

})

export { setNewQuiz, setQuizQuestion, getQuizQuestions, getLeaderboard }