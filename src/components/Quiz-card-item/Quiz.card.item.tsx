import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addQestionAction, removeQuizAction } from '../../redux/quiz/quiz.action';
import { ReactComponent as EditIcon } from "../../icons-svg/edit.svg";
import { AddQestion, Quiz } from '../../redux/quiz/model';


interface QuizCardItemProps {
   quiz: Quiz
   quizId: string
   removeQuiz: (quizId: string) => void
}


function QuizCardItem({ removeQuiz, quizId, quiz }: QuizCardItemProps) {

   const [isStatusOk, setIsStatusOk] = useState<boolean>(false)

   function checkStatus() {
      quiz.qestions.forEach((qestion, index) => {
         if (qestion.numberOfUnswers > 1) {
            setIsStatusOk(true)
         }
      })
   }


   useEffect(() => {
      checkStatus()
   }, [])

   return (
      <>
         <div className="col">
            <div className={`${!isStatusOk ? 'red-shadow' : ''} card mb-4 shadow-sm`}>
               <div className="card-header">
                  <h4 >
                     {quiz.title}
                     <Link
                        to={`quiz/edit/${quizId}`}
                        className="edit-quiz-btn"
                     >
                        <EditIcon />
                     </Link>
                     <span
                        className="delete-quiz-btn"
                        onClick={() => {
                           const con = window.confirm('?בטוח שברצונך למחוק סקר זה')

                           if (!con) {
                              return
                           }
                           removeQuiz(quizId)
                        }}
                     >
                        x
                     </span>
                  </h4>
               </div>
               <div className="card-body">
                  {!isStatusOk && <small className="text-danger" >Some of qestion missing unswers or no qestions yet</small>}
                  <p>Description:</p>
                  <ul className="list-unstyled mt-3 mb-4">
                     <li>{quiz.description}</li>
                  </ul>
                  <h6
                     className="card-title pricing-card-title">
                     {quiz.numberQestions}
                     <small className="text-muted">
                        / Qestions
                     </small>
                     &nbsp;
                  </h6>
                  <br />
                  <Link
                     className={`${quiz.qestions.length === 0 || !isStatusOk ? 'disabled-btn' : ''} w-100 btn btn-sm btn-primary`}
                     to={`/quiz/${quizId}`}
                     type="button"
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
      removeQuiz: (quizId: string) => dispatch(removeQuizAction(quizId)),
      addQestion: (info: AddQestion) => dispatch(addQestionAction(info))
   }
}


export default connect(null, mapDispatchToState)(QuizCardItem)