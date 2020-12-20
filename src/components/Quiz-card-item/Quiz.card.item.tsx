import React, { useEffect, useState } from 'react'
import { connect, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addQuestionAction, removeQuizAction } from '../../redux/quiz/quiz.action';
import { ReactComponent as EditIcon } from "../../icons-svg/edit.svg";
import { AddQuestion, Quiz } from '../../redux/quiz/model';
import ErrorMessage from '../Error-message/Error.message';
import { confirmAlert } from '../../utils/confirm.alert';
import { publishQuizAsync } from '../../redux/quiz/quiz.actions.async';
import { RootState } from '../../redux/store';



interface QuizCardItemProps {
   quiz: Quiz
   quizId: string
   removeQuiz: (quizId: string) => void
   publishQuiz: (quiz: Quiz) => void

}


function QuizCardItem({ removeQuiz, publishQuiz, quizId, quiz }: QuizCardItemProps) {

   const [isStatusOk, setIsStatusOk] = useState<boolean>(true)

   // const q = useSelector((state: RootState) => state.quizzes[quizId])



   useEffect(() => {
      function checkStatus() {
         if (quiz.numberQuestions === 0) {
            return
         }
         quiz.questions.forEach((question) => {
            setIsStatusOk(true)
            if (question.numberOfAnswers <= 1) {
               console.log(isStatusOk)
               setIsStatusOk(false)
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
                  <Link
                     to={`quiz/edit/${quizId}`}
                     className="edit-quiz-btn edit-icon">
                     <EditIcon />
                  </Link>
                  <span
                     className="delete-quiz-btn"
                     onClick={() => {
                        if (confirmAlert('quiz')) {
                           removeQuiz(quizId)
                        }
                     }}>
                     X
                    </span>
                  <h4 >
                     {quiz.title}
                  </h4>
               </div>
               <div className="card-body">
                  <div>
                     <small style={{ float: 'left', fontSize: '12px' }}>{quiz.dateCreated}</small>
                  </div>
                  <br />
                  <div >
                     <strong >Description:</strong>
                  </div>
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
                     type="button">
                     Get started
                  </Link>
                  {/* <br />
                  <br />
                  <button
                     type="button"
                     onClick={() => {
                        publishQuiz(quiz)
                     }}
                     className={`${q.quiz.published || quiz.questions.length === 0 || !isStatusOk ? 'disabled-btn' : ''} w-100 btn btn-sm btn-pink`}>
                     Publish
                  </button> */}
                  <ErrorMessage
                     message={'Some of the questions are missing answers or there are no questions yet'}
                     show={quiz.questions.length === 0 || !isStatusOk}
                  />
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}


function mapDispatchToState(dispatch: Function) {
   return {
      removeQuiz: (quizId: string) => dispatch(removeQuizAction(quizId)),
      addQuestion: (info: AddQuestion) => dispatch(addQuestionAction(info)),
      publishQuiz: (quiz: Quiz) => dispatch(publishQuizAsync(quiz))
   }
}


export default connect(null, mapDispatchToState)(QuizCardItem)