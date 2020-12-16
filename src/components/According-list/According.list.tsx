import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AddAnswer, EditQuestion, Question, RemoveQuestion, RemoveAnswer } from '../../redux/quiz/model'
import { addAnswerAction, editQuestionAction, removeQuestionAction, removeAnswerAction } from '../../redux/quiz/quiz.action'
import AnswerItem from '../Answer-item/Answer.item';
import CardContainer from '../Card-container/Card.container';
import ErrorMessage from '../Error-message/Error.message';
import AccordingItem from '../According-item/According.item';
import { confirmAlert } from '../../utils/confirm.alert';
import WithInput from '../With-input/With.input';
import { QuestionHeader } from '../Question-item/Question.item';
import AddAnswerForm from '../Add-answer-form/Add.answer,form';

const QuestionHeaderWhitInput = WithInput(QuestionHeader)


interface AccordingListProps {
   quizId: string
   questions: Question[],
   removeQuestion: (info: RemoveQuestion) => void
   removeAnswer: (info: RemoveAnswer) => void
   addAnswer: (info: AddAnswer) => void
   editQuestion: (info: EditQuestion) => void
}

function AccordingList({ editQuestion, removeAnswer, removeQuestion, addAnswer, quizId, questions }: AccordingListProps) {

   const [isAddAnswer, setIsAddAnswer] = useState<boolean>(false)

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
                        <div className="mt-3 mb-3">
                           <button
                              className="btn btn-pink btn-sm"
                              onClick={() => {
                                 if (confirmAlert('question')) {
                                    removeQuestion({
                                       quizId: quizId,
                                       questionId: question.questionId
                                    })
                                 }
                              }}>
                              Delete question
                           </button>
                           <button
                              style={{ float: 'right' }}
                              className={`${question.numberOfAnswers >= 6 || isAddAnswer ? 'disabled-btn' : ''} btn btn-blue btn-sm`}
                              onClick={() => {
                                 setIsAddAnswer(!isAddAnswer)
                              }}>
                              Add answer +
                          </button>
                        </div>
                        <QuestionHeaderWhitInput
                           value={question.question}
                           property={'qestion'}
                           outPutNewValue={(value: string) => {
                              editQuestion({
                                 questionId: question.questionId,
                                 value: value,
                                 quizId: quizId
                              })
                           }}
                        />
                        <hr />
                        {isAddAnswer &&
                           <React.Fragment>
                              <AddAnswerForm
                                 addAnswer={(value: string) => {
                                    addAnswer({
                                       quizId: quizId,
                                       value: value,
                                       questionId: question.questionId
                                    })
                                    setIsAddAnswer(!isAddAnswer)
                                 }}
                                 closeAddAnswerForm={() => setIsAddAnswer(!isAddAnswer)}
                              />
                              <hr />
                           </React.Fragment>}
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
                                       className="badge badge-center"
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


