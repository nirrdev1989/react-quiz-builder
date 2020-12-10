import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import QestionItem from '../components/Qestion-item/Qestion.item'
import { setCurrentQuizAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'

let results: any

function QuizPage({ currentQuiz, match }: any) {
    const { quiz } = useSelector((state: RootState) => {
        const { quizId } = match.params
        const quizUnswers = state.currentQuiz
        results = quizUnswers
        return state.quizzes[quizId]
    })


    useEffect(() => {
        currentQuiz(match.params.quizId)
    }, [match.params.quizId])


    return (
        <>
            <h3>{quiz.title}</h3>
            <br />
            {
                quiz.qestions.map((qestion, index) => {
                    return <div key={index}>
                        <QestionItem qestion={qestion} />
                    </div>
                })
            }

            <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                    alert(` 
                        Quiz id:  ${JSON.stringify(results.quizId)}
                        Unswers:  ${JSON.stringify(results.unswers)}`
                    )
                }}>
                Submit
            </button>
        </>
    )
}


function mapDispatchToProps(dispatch: Function) {
    return {
        currentQuiz: (quizId: string) => dispatch(setCurrentQuizAction(quizId))
    }
}


export default connect(null, mapDispatchToProps)(QuizPage)