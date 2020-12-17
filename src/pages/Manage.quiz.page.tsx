import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import AccordingList from '../components/According-list/According.list'
import AddQuestionForm from '../components/Add-question-form/Add.question.form'
import { AddQuestion, propertiesQuizEditMain, Question, QuizEditMain } from '../redux/quiz/model'
import { addQuestionAction, editQuizMainAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'
import CardContainer from '../components/Card-container/Card.container'
import WithInput from '../components/With-input/With.input'
import { QuizDescription, QuizTitle } from '../components/Quiz-main/Quiz.main'
// import { Redirect } from 'react-router'


const QuizTitleWithInput = WithInput(QuizTitle)
const QuizDescriptionWithInput = WithInput(QuizDescription)


interface ManageQuizPageProps {
   editQuizMain: (info: QuizEditMain) => void
   addQuestion: (info: AddQuestion) => void
   match: any
}


function ManageQuizPage({ addQuestion, editQuizMain, match }: ManageQuizPageProps) {
   const { quizId } = match.params

   const { quiz } = useSelector((state: RootState) => state.quizzes[quizId])

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
         {/* {!quizId && <Redirect to="/quizzes-list" />} */}
         <CardContainer>
            <div className="quiz-nav-btns">
               <button
                  onClick={() => setIsAddQwuestion(!isAddQuestion)}
                  className={`${isAddQuestion ? 'disabled-btn' : ''} btn btn-blue btn-sm`}
                  type="button">
                  Add question +
               </button>
               {/* <div>
                  <button
                     type="button"
                     className="btn btn-sm btn-blue">
                     Publish
                   </button>
                        &nbsp;
                   <button
                     type="button"
                     className="btn btn-sm btn-pink">
                     Delete
                  </button>
               </div> */}
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
      </React.Fragment>
   )
}


function mapDispatchToState(dispatch: Function) {
   return {
      addQuestion: (info: AddQuestion) => dispatch(addQuestionAction(info)),
      editQuizMain: (info: QuizEditMain) => dispatch(editQuizMainAction(info))
   }
}


export default connect(null, mapDispatchToState)(ManageQuizPage)