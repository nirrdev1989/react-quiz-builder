import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Question, QuizResultsAnswer, QuizResults } from '../../redux/quiz/model'
import { setAnswerAction } from '../../redux/quiz/quiz.action'


interface QuestionItemProps {
    question: Question
    setAnswer: (answerResult: QuizResultsAnswer) => void
    results: QuizResults
}


function QuestionItem({ setAnswer, question, results }: QuestionItemProps) {

    function handleAnswerChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target

        setAnswer({
            question: question.question,
            choosenAnswer: value
        })

    }

    return (
        <React.Fragment>
            <span>
                <strong> Question: </strong> {question.question}
            </span>
            <br />
            {
                question.numberOfAnswers > 1 &&
                question.answers.map((answer, index) => {
                    // console.log(results)
                    return <div key={index}>
                        <input
                            style={{ marginRight: '0.5rem' }}
                            name={question.question}
                            type="radio"
                            value={answer}
                            onChange={handleAnswerChange}
                        />
                        {answer}
                    </div>
                })
            }
            <hr />
        </React.Fragment>
    )
}


function mapDispatchToProps(dispatch: Function) {
    return {
        setAnswer: (answerResult: QuizResultsAnswer) => dispatch(setAnswerAction(answerResult))
    }
}

export default connect(null, mapDispatchToProps)(QuestionItem)