import React, { ChangeEvent, FormEvent, useState } from 'react'
import { connect } from 'react-redux'
import { AddAnswer, EditQuestion, Question, RemoveQuestion, RemoveAnswer } from '../../redux/quiz/model'
import { addAnswerAction, editQuestionAction, removeQuestionAction, removeAnswerAction } from '../../redux/quiz/quiz.action'
import { ReactComponent as EditIcon } from "../../icons-svg/edit.svg";
import AnswerItem from '../Answer-item/Answer.item';
import EditForm from '../Edit-form/Edit.form';
import CardContainer from '../Card-container/Card.container';
import ErrorMessage from '../Error-message/Error.message';
import AccordingItem from '../According-item/According.item';


interface AccordingListProps {
   quizId: string
   questions: Question[],
   removeQuestion: (info: RemoveQuestion) => void
   removeAnswer: (info: RemoveAnswer) => void
   addAnswer: (info: AddAnswer) => void
   editQuestion: (info: EditQuestion) => void
}

function AccordingList({ editQuestion, removeAnswer, removeQuestion, addAnswer, quizId, questions }: AccordingListProps) {

   const [isEditMode, setIsEditMode] = useState<boolean>(false)
   const [currentFiled, setCurrentField] = useState<string>('')

   const [editInfo, setEditInfo] = useState<EditQuestion | AddAnswer>({
      quizId: quizId,
      questionId: '',
      value: ''
   })

   function handelEditChange(event: ChangeEvent<HTMLInputElement>) {
      const { value } = event.target
      // console.log(value)
      setEditInfo((prev) => {
         return {
            ...prev,
            questionId: editInfo.questionId,
            value: value
         }
      })
   }

   function handelEditSubmit(event: FormEvent) {
      event.preventDefault()
      if (currentFiled === 'edit-question') {
         editQuestion(editInfo)
         setIsEditMode(!isEditMode)
      }
      else if (currentFiled === 'add-answer') {
         addAnswer(editInfo)
         setIsEditMode(!isEditMode)
      }

   }

   return (
      <React.Fragment>
         <div className="accordion" id="accordionExample">
            {questions.map((question) => {
               return <CardContainer key={question.questionId}>
                  <div key={question.questionId}>
                     <ErrorMessage
                        message={'This question is missing an answer'}
                        show={question.numberOfAnswers < 2} />
                     <AccordingItem
                        headerId={question.questionId}
                        collapseTarget={question.questionId + 1}
                        headerContent={question.question}
                        headerName={'Question'}>
                        {isEditMode ?
                           (<CardContainer>
                              <EditForm
                                 propery={currentFiled}
                                 closeEditForm={() => setIsEditMode(!isEditMode)}
                                 handleChange={handelEditChange}
                                 handleSubmit={handelEditSubmit} />
                           </CardContainer>
                           ) : (
                              <React.Fragment>
                                 <button
                                    className="btn btn-pink btn-sm"
                                    onClick={() => {
                                       const con = window.confirm('בטוח שתרצה למחוק את השאלה?')
                                       if (con) {
                                          removeQuestion({
                                             quizId: quizId,
                                             questionId: question.questionId
                                          })
                                       }
                                    }}>
                                    Delete question
                                 </button>
                                 &nbsp;  &nbsp;  &nbsp;
                                 <EditIcon className="edit-icon"
                                    onClick={() => {
                                       setIsEditMode(!isEditMode)
                                       setCurrentField('edit-question')
                                       setEditInfo({
                                          quizId: quizId,
                                          questionId: question.questionId,
                                          value: ''
                                       })
                                    }} />
                                 <button
                                    style={{ float: 'right' }}
                                    className={`${question.numberOfAnswers >= 6 ? 'disabled-btn' : ''} btn btn-blue btn-sm`}
                                    onClick={() => {
                                       setIsEditMode(!isEditMode)
                                       setCurrentField('add-answer')
                                       setEditInfo({
                                          quizId: quizId,
                                          questionId: question.questionId,
                                          value: ''
                                       })
                                    }}>
                                    Add answer +
                                 </button>
                                 <br />
                                 <br />
                                 <small><strong>Answers:</strong></small>
                                 <ul className="list-group">
                                    {question.answers.map((answer, index) => {
                                       return <CardContainer key={index + question.questionId}>
                                          <AnswerItem
                                             answer={answer}
                                             index={index}>
                                             <span
                                                className="badge"
                                                style={{ backgroundColor: 'rgb(236, 12, 87)' }}
                                                onClick={() => {
                                                   removeAnswer({
                                                      quizId: quizId,
                                                      questionId: question.questionId,
                                                      index: index
                                                   })
                                                }}>
                                                x
                                             </span>
                                          </AnswerItem>
                                       </CardContainer>
                                    })}
                                 </ul>
                              </React.Fragment>)}
                     </AccordingItem>
                  </div>
               </CardContainer>
            })}
         </div>
      </React.Fragment>
   )
}


function mapDispatchToProps(dispatch: Function) {
   return {
      removeQuestion: (info: RemoveQuestion) => dispatch(removeQuestionAction(info)),
      removeAnswer: (info: RemoveAnswer) => dispatch(removeAnswerAction(info)),
      addAnswer: (info: AddAnswer) => dispatch(addAnswerAction(info)),
      editQuestion: (info: EditQuestion) => dispatch(editQuestionAction(info))
   }
}

export default connect(null, mapDispatchToProps)(AccordingList)


