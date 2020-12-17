import React from 'react'
import { QuizResults } from '../../redux/quiz/model'
import CardContainer from '../Card-container/Card.container'
import { QuestionHeader } from '../Question-item/Question.item'


interface QuizFinalResultsProps {
   results: QuizResults
   onBack: () => void
   onSendResults?: () => void
}


function QuizFinalResults({ results, onBack }: QuizFinalResultsProps) {
   // console.log(results)
   return (
      <React.Fragment>
         <CardContainer>
            {results.answers.map((answer, index) => {
               return <React.Fragment key={index + 2}>
                  <li style={{ listStyle: 'none' }}>
                     <QuestionHeader value={answer.question} />
                     <p>
                        <strong><small> Answer:</small></strong>&nbsp;{answer.choosenAnswer}
                     </p>
                  </li>
                  {index < results.answers.length - 1 && <hr />}
               </React.Fragment>
            })}
         </CardContainer>
         <CardContainer>
            <button className="btn btn-blue btn-sm">Send</button>
            &nbsp;&nbsp;
            <button
               className="btn btn-pink btn-sm"
               onClick={onBack}>Back</button>
         </CardContainer>
      </React.Fragment>
   )
}


export default QuizFinalResults