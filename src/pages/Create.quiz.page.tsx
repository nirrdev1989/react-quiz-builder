import React from 'react'
import CreateMainQuizForm from '../components/Create-main-quiz-form/Create.main.quiz.form'
import FadeAnimateContainer from '../components/Fade-animate-container/Fade.animate.container'

export default function CreateQuizPage() {
   return (
      <React.Fragment>
         <FadeAnimateContainer>
            <CreateMainQuizForm />
         </FadeAnimateContainer>
      </React.Fragment>
   )
}