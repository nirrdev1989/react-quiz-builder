import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import AccordingList from '../components/According-list/According.list'
import AddQuestionForm from '../components/Add-question-form/Add.question.form'
import { AddQuestion, propertiesQuizEditMain, Question, QuizEditMain } from '../redux/quiz/model'
import { addQuestionAction, editQuizMainAction, removeQuizAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'
import CardContainer from '../components/Card-container/Card.container'
import WithInput from '../components/With-input/With.input'
import { QuizMainItem } from '../components/Quiz-main-item/Quiz.main.item'
import { useHistory, useParams } from 'react-router'
import FadeAnimateContainer from '../components/Fade-animate-container/Fade.animate.container'
import { confirmAlert } from '../utils/confirm.alert'
import AlertWindow from '../components/Alert-window/Alert.window'
import SmallMessage from '../components/Small-massage/Small.message'
// import { filterObject } from '../utils/filter.object'


const QuizMainItemWithInput = WithInput(QuizMainItem)


interface ManageQuizPageProps {
   editQuizMain: (info: QuizEditMain) => void
   addQuestion: (info: AddQuestion) => void
   removeQuiz: (quizId: string) => void
}


function ManageQuizPage({ addQuestion, editQuizMain, removeQuiz }: ManageQuizPageProps) {

   const quizId = useParams<{ quizId: string }>().quizId

   const { quiz } = useSelector((state: RootState) => state.quizzes[quizId])

   const history = useHistory()

   const [isAddQuestion, setIsAddQwuestion] = useState<boolean>(false)

   function getQuestion(question: Question) {
      addQuestion({ quizId: quizId, question: question })
      setIsAddQwuestion(!isAddQuestion)
   }


   function getEditNewValue(value: string, property: propertiesQuizEditMain) {
      console.log(property)
      if (value !== '' && value !== null) {
         editQuizMain({
            quizId: quizId,
            value: value,
            property: property,
         })
      }
   }

   // useEffect(() => {
   //    console.log(filterObject(['title', 'description', 'ownerName', 'ownerEmail', 'password'], quiz))
   // }, [])

   return (
      <React.Fragment>
         <FadeAnimateContainer>
            <CardContainer>
               <div className="quiz-nav-btns">
                  <button
                     onClick={() => setIsAddQwuestion(!isAddQuestion)}
                     className={`${isAddQuestion ? 'disabled-btn' : ''} btn btn-blue btn-sm`}
                     type="button">
                     Add question +
                  </button>
                  <div>
                     {/* <button
                        type="button"
                        className="btn btn-sm btn-blue">
                        Publish
                   </button>
                        &nbsp; */}
                     <button
                        onClick={() => {
                           if (confirmAlert('Quiz')) {
                              removeQuiz(quizId)
                              history.push('/quizzes-list')
                           }
                        }}
                        type="button"
                        className="btn btn-sm btn-pink">
                        Delete
                     </button>
                  </div>
               </div>
            </CardContainer>
            <CardContainer>
               {isAddQuestion ?
                  <AddQuestionForm
                     closeAddQuestionForm={() => setIsAddQwuestion(!isAddQuestion)}
                     addQuestion={getQuestion}
                  /> :
                  <React.Fragment>
                     <h6>
                        <small style={{ fontSize: '12px', float: 'right' }}>{quiz.dateCreated}</small>
                     </h6>
                     <br />
                     <QuizMainItemWithInput
                        type="text"
                        property={'title'}
                        maxLength={50}
                        value={quiz.title}
                        outPutNewValue={getEditNewValue}
                     />
                     <hr />
                     <QuizMainItemWithInput
                        type="text"
                        maxLength={200}
                        value={quiz.description}
                        property={'description'}
                        outPutNewValue={getEditNewValue}
                     />
                     <hr />
                     <QuizMainItemWithInput
                        type="text"
                        value={quiz.ownerName}
                        minLength={2}
                        maxLength={20}
                        property={'ownerName'}
                        outPutNewValue={getEditNewValue}
                     />
                     <hr />
                     <QuizMainItemWithInput
                        type="email"
                        value={quiz.ownerEmail}
                        maxLength={50}
                        property={'ownerEmail'}
                        outPutNewValue={getEditNewValue}
                     />
                     <hr />
                     <QuizMainItemWithInput
                        type="password"
                        maxLength={10}
                        minLength={3}
                        value={quiz.password}
                        property={'password'}
                        outPutNewValue={getEditNewValue}
                     />
                     {!quiz.published &&
                        <AlertWindow color="danger">
                           <SmallMessage
                              message={'This quiz is not published'}
                              color="withe"
                           />
                        </AlertWindow>}
                  </React.Fragment>}
            </CardContainer>
            {quiz.questions.length > 0 &&
               <AccordingList
                  quizId={quizId}
                  questions={quiz.questions}
               />}
         </FadeAnimateContainer>
      </React.Fragment>
   )
}


function mapDispatchToState(dispatch: Function) {
   return {
      addQuestion: (info: AddQuestion) => dispatch(addQuestionAction(info)),
      editQuizMain: (info: QuizEditMain) => dispatch(editQuizMainAction(info)),
      removeQuiz: (quizId: string) => dispatch(removeQuizAction(quizId))
   }
}


export default connect(null, mapDispatchToState)(ManageQuizPage)