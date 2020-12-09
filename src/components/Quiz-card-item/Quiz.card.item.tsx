import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeQuizAction } from '../../redux/quiz/quiz.action';

interface QuizCardItemProps {
   description: string
   title: string
   numberQestions: number
   quizId: string
   removeQuiz: (quizId: string) => void
}


function QuizCardItem({ removeQuiz, quizId, description, title, numberQestions }: QuizCardItemProps) {
   return (
      <>
         <div className="col">
            <div className="card mb-4 shadow-sm">
               <div className="card-header">
                  <h4 >
                     {title}
                     <span
                        className="delete-quiz-btn"
                        onClick={() => removeQuiz(quizId)}
                     >
                        x
                     </span>
                  </h4>
               </div>
               <div className="card-body">
                  <h4
                     className="card-title pricing-card-title">
                     {numberQestions}
                     <small className="text-muted">
                        / Qestions
                     </small>
                  </h4>
                  <p>Description:</p>
                  <ul className="list-unstyled mt-3 mb-4">
                     <li>{description}</li>
                  </ul>
                  <Link
                     className="w-100 btn btn-sm btn-primary"
                     to={`/quiz/${quizId}`}
                  >
                     Get started
                  </Link>
               </div>
            </div>
         </div>
      </>
   )
}

function mapDispatchToState(dispatch: Function) {
   return {
      removeQuiz: (quizId: string) => dispatch(removeQuizAction(quizId))
   }
}


export default connect(null, mapDispatchToState)(QuizCardItem)