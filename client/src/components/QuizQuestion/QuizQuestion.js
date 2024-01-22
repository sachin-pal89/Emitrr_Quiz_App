import React, { useState, useEffect } from 'react'
import axios from "axios"

const QuizQuestion = ({ user, quiz, lang, handleStagePhases }) => {

    const [lastQuestion, setLastQuestion] = useState(false);
    const [quizQuestion, setQuizQuestion] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([]);
    const [answerCheck, setAnswerCheck] = useState(false);
    const [quizLang, setQuizLang] = useState({});
    const [allQuizQuestions, setAllQUizQuestions] = useState([]);
    const [yourScore, setYourScore] = useState(0);
    const [completed, setCompeleted] = useState(false);


    const handleUpdateScore = async () => {

        try {
            
            const updateData = {
                username: user.username,
                lang_name: lang,
                score: yourScore,
                curr_question_no: currentQuestionIndex,
            }
    
    
            console.log(updateData);
    
            const response = await axios.post("http://localhost:5000/updateScore", updateData)

            console.log(response.data);

        } catch (error) {
            console.log(error.message);
        }
    }

    const handleCompletedQuiz = () => {

        handleUpdateScore();

        setCompeleted(true);
    }

    const handleLastQuestion = () => {

        setLastQuestion(true);
    }

    const handleNextQuestion = async () => {

        if (currentQuestionIndex === quizLang.length) {
            handleLastQuestion();
        }

        handleUpdateScore();

        const currentQuestion = quizLang.questions[currentQuestionIndex - 1];

        if (currentQuestion) {
            const optionsString = currentQuestion.options[0];
            const optionsArray = JSON.parse(optionsString);

            setQuizQuestion(currentQuestion);
            setOptions(optionsArray)

            // Move to the next question
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption(null);
        }
        else {

        }
    };

    const handleOptionClick = (option) => {

        // If an option is already selected, do nothing
        if (selectedOption !== null) {
            return;
        }

        // Handle option click
        const answerCheck = option === quizLang.questions[currentQuestionIndex - 1].answer ? true : false;

        if (answerCheck) {
            const currentQuestionScore = quizLang.questions[currentQuestionIndex - 1].score;
            setYourScore((previousScore) => previousScore + currentQuestionScore)
        }

        setAnswerCheck(answerCheck);
        setSelectedOption(option);
    };

    useEffect(() => {
        // Update quizQuestion when lang or currentQuestionIndex changes
        const currentQuiz = quiz.find((quizItem) => quizItem.lang_name === lang);

        if (currentQuiz) {

            setQuizLang(currentQuiz);

            setAllQUizQuestions(currentQuiz.questions);

            if (currentQuestionIndex === currentQuiz.questions.length) {
                handleLastQuestion();
            }

            const currentQuestion = currentQuiz.questions[currentQuestionIndex - 1];

            // Check if currentQuestion exists
            if (currentQuestion) {
                const optionsString = currentQuestion.options[0];
                const optionsArray = JSON.parse(optionsString);

                setQuizQuestion(currentQuestion);
                setOptions(optionsArray)

            }
        }

    }, [lang, currentQuestionIndex, quiz]);

    return (
        <>
            <div className='w-[60%] h-full flex justify-center items-center'>
                <div className='transform -translate-z-20 shadow-lg flex flex-col
                    items-center justify-center'>
                    {!completed ? (
                        <>
                            <span className='px-3 py-2 font-semibold'>Your Score: {yourScore}</span>
                            <span className='bg-green-300 px-3 py-1 font-semibold border-2 border-green-700 text-white rounded-lg'>{quizQuestion.level}</span>
                            <span className='px-3 py-2 font-semibold'>Score: {quizQuestion.score}</span>
                            <p className='p-3 text-[20px] font-semibold text-blue-900'>{currentQuestionIndex}. {quizQuestion.question}</p>
                            <ul className='py-4 px-5 w-full'>
                                {options &&
                                    options.map((option, index) => (
                                        <li
                                            key={index}
                                            className={`border-2 border-gray-500 hover:shadow-md cursor-pointer
                                            my-3 pl-3 py-3 text-[18px] font-medium rounded-lg 
                                            ${selectedOption === option ? (answerCheck ? 'bg-green-300' : 'bg-red-200') : ''}`
                                            }
                                            onClick={() => handleOptionClick(option)}
                                        >
                                            {option}
                                        </li>
                                    ))}
                            </ul>
                            <div className='w-full flex flex-col items-center justify-center'>
                                {currentQuestionIndex === allQuizQuestions.length ? (
                                    <button className={`mb-4 p-3 w-[30%] text-white bg-blue-800 hover:bg-blue-900 hover:shadow-md rounded-lg ${selectedOption !== null ? '' : 'opacity-50 cursor-not-allowed'}`}
                                        onClick={() => {
                                            handleCompletedQuiz()
                                        }}
                                        disabled={selectedOption === null}
                                    >
                                        Submit
                                    </button>
                                ) : (
                                    <button className={`${selectedOption !== null ? '' : "cursor-not-allowed opacity-25"} mb-4 p-3 w-[30%] text-white bg-blue-800 hover:bg-blue-900 hover:shadow-md rounded-lg `}
                                        onClick={(e) => {
                                            handleNextQuestion()
                                            }
                                        }
                                        disabled={selectedOption === null}
                                    >
                                        Next
                                    </button>
                                )}
                                <p className='p-2 text-sm font-semibold'> {currentQuestionIndex} of {quizLang.total_question} questions</p>
                            </div>
                        </>
                    ) : (
                        <div className='flex flex-col items-center justify-center p-10'>
                            <p className='text-[40px] font-bold'>Your Final Score</p>
                            <p className='text-[30px] font-semibold m-4'>{yourScore}/{quizLang.total_score}</p>
                            <button className='p-3 mt-4 text-white bg-blue-600 hover:bg-blue-800  hover:shadow-lg rounded-lg'
                                onClick={(e) => handleStagePhases('completed')}
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default QuizQuestion