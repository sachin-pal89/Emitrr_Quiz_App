import React, { useState } from 'react'
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import Instructions from '../Instructions/Instructions';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import axios from 'axios';

const Quiz = ({ quiz, user}) => {

  const [stage, setStage] = useState('langselect');
  const [lang, setLang] = useState('Python');

  const handleLangSelection = async (val) => {

      const response = await axios.post("http://localhost:5000/newCourse", {username: user.username, lang_name: val})

      setLang(val);
  }

  const handleStagePhases = (stages) => {
    setStage(stages);
  }

  let componentToRenderQuiz;

  switch (stage) {
    case 'langselect':
      componentToRenderQuiz = <LanguageSelect handleLangSelection={handleLangSelection} handleStagePhases={handleStagePhases}/>;
      break;
    
    case 'instructions':
      componentToRenderQuiz = <Instructions handleStagePhases={handleStagePhases}/>;
      break;
    
    case 'quizQuestion':
      componentToRenderQuiz = <QuizQuestion user={user} quiz={quiz} lang={lang} handleStagePhases={handleStagePhases}/>;
      break;
    
    case 'compeleted':
      componentToRenderQuiz = <LanguageSelect handleLangSelection={handleLangSelection} handleStagePhases={handleStagePhases}/>;
      break;
    
    default:
      componentToRenderQuiz = <LanguageSelect handleLangSelection={handleLangSelection} handleStagePhases={handleStagePhases}/>;
      break;
  }

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[80%] h-[80%] flex items-center justify-center'>
            {componentToRenderQuiz}
        </div>
      </div>
    </>
  )
}

export default Quiz