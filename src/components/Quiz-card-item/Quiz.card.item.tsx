import React, { useState } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addQestionAction, removeQuizAction } from '../../redux/quiz/quiz.action';
import EditQuizWindow from '../Edit-quiz-window/Edit.quiz.window';
import { ReactComponent as EditIcon } from "../../icons-svg/edit.svg";
import { AddQestion, Qestion, Quiz, QuizEditMain } from '../../redux/quiz/model';
import AccordingList from '../According-list/According';
import AddQestionForm from '../Add-qestion-form/Add.qestion.form';

interface QuizCardItemProps {
   quiz: Quiz
   quizId: string
   removeQuiz: (quizId: string) => void
   addQestion: (info: AddQestion) => void
}


function QuizCardItem({ addQestion, removeQuiz, quizId, quiz }: QuizCardItemProps) {
   // console.log('QUIZ CARD RENDER', quiz)

   const [isAddQestion, setIsAddQwestion] = useState<boolean>(false)
   const [isEdit, setIsEdit] = useState<boolean>(false)

   function getQestion(qestion: Qestion) {

      addQestion({ quizId: quizId, qestion: qestion })

      setIsAddQwestion(!isAddQestion)
   }

   return (
      <>
         <EditQuizWindow quizId={quizId} />
         <div className="col">
            <div className="card mb-4 shadow-sm">
               <div className="card-header">
                  <h4 >
                     {/* {isEdit ? (<input type="text" />) : null} */}
                     {quiz.title}
                     {/* <EditIcon
                        className="edit-quiz-btn"
                        // data-bs-toggle="modal"
                        // data-bs-target="#exampleModal"
                        onClick={() => { alert('עוד לא עובד') }}
                     /> */}
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
                  <p>Description:
                     {/* <EditIcon
                        // className="edit-quiz-btn"
                        // data-bs-toggle="modal"
                        // data-bs-target="#exampleModal"
                        onClick={() => { alert('עוד לא עובד') }}
                     /> */}
                  </p>
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
                     {!isAddQestion ?
                        (<button
                           className="btn btn-dark btn-sm"
                           onClick={() => setIsAddQwestion(!isAddQestion)}
                        >
                           +
                        </button>)
                        : (null)
                     }
                  </h6>
                  {isAddQestion ? (
                     <AddQestionForm
                        closeAddQestionForm={() => setIsAddQwestion(!isAddQestion)}
                        addQestion={getQestion}
                     />
                  ) : (null)}
                  <AccordingList
                     quizId={quizId}
                     qestions={quiz.qestions}
                  />
                  <br />
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
      removeQuiz: (quizId: string) => dispatch(removeQuizAction(quizId)),
      addQestion: (info: AddQestion) => dispatch(addQestionAction(info))
   }
}


export default connect(null, mapDispatchToState)(QuizCardItem)