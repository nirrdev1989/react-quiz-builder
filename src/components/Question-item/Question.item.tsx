import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Question, QuizResultsAnswer } from '../../redux/quiz/model'
import { setAnswerAction } from '../../redux/quiz/quiz.action'



interface QuestionItemProps {
   question: Question
   setAnswer: (answerResult: QuizResultsAnswer) => void
}


function QuestionItem({ setAnswer, question }: QuestionItemProps) {



   function handleAnswerChange(event: ChangeEvent<HTMLInputElement>) {
      const { value } = event.target



      setAnswer({
         question: question.question,
         choosenAnswer: value
      })

   }

   return (
      <React.Fragment>
         <p>
            <span className="mb-5" >
               <strong> Question: </strong> {question.question}
            </span>
         </p>
         <small> <strong>Options:</strong> </small>
         {question.numberOfAnswers > 1 &&
            question.answers.map((answer, index) => {
               return <div key={index}>
                  <input
                     className="form-check-input"
                     style={{ marginRight: '0.5rem' }}
                     name={question.question}
                     type="radio"
                     value={answer}
                     // checked={results.answers ? true : false}
                     onChange={handleAnswerChange} />
                  {answer}
               </div>
            })}
         <hr style={{ color: 'black', height: '0.1rem' }} />
      </React.Fragment>
   )
}


function mapDispatchToProps(dispatch: Function) {
   return {
      setAnswer: (answerResult: QuizResultsAnswer) => dispatch(setAnswerAction(answerResult))
   }
}

export default connect(null, mapDispatchToProps)(QuestionItem)