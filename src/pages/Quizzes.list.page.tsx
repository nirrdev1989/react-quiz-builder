import React from 'react'
import FadeAnimateContainer from '../components/Fade-animate-container/Fade.animate.container'
import QuizzesList from '../components/Quizzes-list/Quizzes.list'

export default function QuizzesListPage() {
   return (
      <React.Fragment>
         <FadeAnimateContainer>
            <QuizzesList />
         </FadeAnimateContainer>
      </React.Fragment>
   )
}