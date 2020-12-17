import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import AccordingList from '../components/According-list/According.list'
import AddQuestionForm from '../components/Add-question-form/Add.question.form'
import { AddQuestion, propertiesQuizEditMain, Question, QuizEditMain } from '../redux/quiz/model'
import { addQuestionAction, editQuizMainAction, removeQuizAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'
import CardContainer from '../components/Card-container/Card.container'
import WithInput from '../components/With-input/With.input'
import { QuizDescription, QuizTitle } from '../components/Quiz-main/Quiz.main'
import { useHistory, useParams } from 'react-router'
import FadeAnimateContainer from '../components/Fade-animate-container/Fade.animate.container'


const QuizTitleWithInput = WithInput(QuizTitle)
const QuizDescriptionWithInput = WithInput(QuizDescription)


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
      if (value !== '' && value !== null) {
         editQuizMain({
            quizId: quizId,
            value: value,
            property: property,
         })
      }
   }


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
                   </button> */}
                        &nbsp;
                   <button
                        onClick={() => {
                           removeQuiz(quizId)
                           history.push('/quizzes-list')
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
                     <QuizTitleWithInput
                        property={'title'}
                        value={quiz.title}
                        dateCreated={quiz.dateCreated}
                        outPutNewValue={getEditNewValue}
                     />
                     <hr />
                     <QuizDescriptionWithInput
                        value={quiz.description}
                        property={'description'}
                        outPutNewValue={getEditNewValue}
                     />
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