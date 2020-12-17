import React from 'react'
import CreateMainQuiz from '../components/Create.main-quiz/Create.main.quiz'
import FadeAnimateContainer from '../components/Fade-animate-container/Fade.animate.container'

export default function CreateQuizPage() {
   return (
      <React.Fragment>
         <FadeAnimateContainer>
            <CreateMainQuiz />
         </FadeAnimateContainer>
      </React.Fragment>
   )
}