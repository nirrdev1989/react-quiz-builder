import React, { ChangeEvent, useState } from 'react'
import { connect } from 'react-redux'
import { AddAnswer, EditQuestion, Question, RemoveQuestion, RemoveAnswer } from '../../redux/quiz/model'
import { addAnswerAction, editQuestionAction, removeQuestionAction, removeAnswerAction } from '../../redux/quiz/quiz.action'
import { ReactComponent as EditIcon } from "../../icons-svg/edit.svg";
import AnswerItem from '../Answer-item/Answer.item';
import AlertWindow from '../Alert-window/Alert.window';
import { firstChartToUpperCase } from '../../utils/first.chart.uppercase';


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
      console.log(value)
      setEditInfo((prev) => {
         return {
            ...prev,
            questionId: editInfo.questionId,
            value: value
         }
      })
   }

   return (
      <React.Fragment>
         <div className="accordion" id="accordionExample">
            {
               questions.map((question, index) => {
                  return <div key={question.questionId}>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id={question.questionId}>
                           {question.numberOfAnswers < 2 &&
                              <small
                                 className="text-danger"
                                 style={{ fontSize: '12px' }}
                              >
                                 This question is missing an answer
                           </small>
                           }
                           <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${question.questionId + 1}`}
                              // aria-expanded="false"
                              aria-controls={`collapse${question.questionId + 1}`}
                           >
                              <strong>Question:</strong> &nbsp; {question.question}
                           </button>
                        </h2>
                        <div
                           id={`collapse${question.questionId + 1}`}
                           className="accordion-collapse collapse"
                           aria-labelledby={question.questionId}
                           data-bs-parent="#accordionExample"
                        >
                           <div className="accordion-body">
                              {isEditMode ?
                                 (<AlertWindow
                                    color={'light'}
                                 >
                                    <label className="mb-1">{firstChartToUpperCase(currentFiled)}*</label>
                                    <div className="center-element">
                                       <input
                                          required
                                          className="form-control"
                                          onChange={handelEditChange}
                                          type="text"
                                          name={editInfo.value}
                                          placeholder={firstChartToUpperCase(currentFiled)}
                                       />
                                    </div>
                                    <div className="mt-3">
                                       <button
                                          type="submit"
                                          className="btn btn-blue btn-sm"
                                          onClick={() => {
                                             if (editInfo.value !== '' && editInfo.value !== null) {
                                                if (currentFiled === 'edit-question') {
                                                   editQuestion(editInfo)
                                                   setIsEditMode(!isEditMode)
                                                }
                                                else if (currentFiled === 'add-answer') {
                                                   addAnswer(editInfo)
                                                   setIsEditMode(!isEditMode)
                                                }
                                             }
                                          }}
                                       >
                                          Save
                                       </button>
                                          &nbsp;
                                          <button
                                          className="btn btn-pink btn-sm"
                                          onClick={() => setIsEditMode(!isEditMode)}
                                       >
                                          Cancel
                                      </button>
                                    </div>
                                 </AlertWindow>) : (
                                    <React.Fragment>
                                       <button
                                          className="btn btn-pink btn-sm"
                                          onClick={() => {
                                             removeQuestion({
                                                quizId: quizId,
                                                questionId: question.questionId
                                             })
                                          }}
                                       >
                                          Delete question
                                       </button>
                                       &nbsp;
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
                                          className={`${question.numberOfAnswers >= 6 ? 'disabled-btn' : ''} btn btn-balck btn-sm`}
                                          onClick={() => {
                                             setIsEditMode(!isEditMode)
                                             setCurrentField('add-answer')
                                             setEditInfo({
                                                quizId: quizId,
                                                questionId: question.questionId,
                                                value: ''
                                             })
                                          }}
                                       >
                                          Add answer
                                       </button>
                                       <br />
                                       <br />
                                       <ul className="list-group">
                                          {
                                             question.answers.map((answer, index) => {
                                                return <AnswerItem
                                                   key={index + question.questionId}
                                                   answer={answer}
                                                   index={index}
                                                >
                                                   <span
                                                      className="badge rounded-pill"
                                                      style={{ backgroundColor: 'rgb(236, 12, 87)' }}
                                                      onClick={() => {
                                                         removeAnswer({
                                                            quizId: quizId,
                                                            questionId: question.questionId,
                                                            index: index
                                                         })
                                                      }}
                                                   >
                                                      x
                                              </span>
                                                </AnswerItem>
                                             })
                                          }
                                       </ul>
                                    </React.Fragment>)
                              }
                           </div>
                        </div>
                     </div>
                  </div>
               })
            }
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


