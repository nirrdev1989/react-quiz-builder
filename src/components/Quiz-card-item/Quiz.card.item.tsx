import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addQuestionAction, removeQuizAction } from '../../redux/quiz/quiz.action';
import { ReactComponent as EditIcon } from "../../icons-svg/edit.svg";
import { AddQuestion, Quiz } from '../../redux/quiz/model';


interface QuizCardItemProps {
   quiz: Quiz
   quizId: string
   removeQuiz: (quizId: string) => void
}


function QuizCardItem({ removeQuiz, quizId, quiz }: QuizCardItemProps) {

   const [isStatusOk, setIsStatusOk] = useState<boolean>(false)



   useEffect(() => {
      function checkStatus() {
         quiz.questions.forEach((question) => {
            console.log(question)
            if (question.numberOfAnswers > 1) {
               setIsStatusOk(true)
            }
         })
      }
      checkStatus()
   }, [])

   return (
      <React.Fragment>
         <div className="col">
            <div className={`card mb-4 shadow-sm`}>
               <div className="card-header">
                  <h4 >
                     {quiz.title}
                     <Link
                        to={`quiz/edit/${quizId}`}
                        className="edit-quiz-btn edit-icon"
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
                  {!isStatusOk &&
                     <small className="text-danger" >
                        Some of the questions are missing answers or there are no questions yet
                    </small>
                  }
                  <p><strong>Description:</strong></p>
                  <span>{quiz.description}</span>
                  <h6
                     className="card-title pricing-card-title">
                     {quiz.numberQuestions}
                     <small className="text-muted">
                        / Questions
                     </small>
                     &nbsp;
                  </h6>
                  <br />
                  <Link
                     className={`${quiz.questions.length === 0 || !isStatusOk ? 'disabled-btn' : ''} w-100 btn btn-sm btn-blue`}
                     to={`/quiz/${quizId}`}
                     type="button"
                  >
                     Get started
                  </Link>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}


function mapDispatchToState(dispatch: Function) {
   return {
      removeQuiz: (quizId: string) => dispatch(removeQuizAction(quizId)),
      addQuestion: (info: AddQuestion) => dispatch(addQuestionAction(info))
   }
}


export default connect(null, mapDispatchToState)(QuizCardItem)