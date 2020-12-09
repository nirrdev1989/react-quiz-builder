import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import QestionItem from '../components/Qestion-item/Qestion.item'
import { Quiz } from '../redux/quiz/model'
import { setCurrentQuizAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'


function QuizPage({ currentQuiz, match }: any) {
    let x: any
    const { quiz } = useSelector((state: RootState) => {
        const { quizId } = match.params
        const { unswers } = state.currentQuiz
        x = unswers
        return state.quizzes[quizId]
    })

    // const results = useSelector((state: RootState) => {
    //     return state.currentQuiz.unswers
    // })

    useEffect(() => {
        currentQuiz(match.params.quizId)
    }, [])


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

            <button className="btn btn-primary btn-sm" onClick={() => {
                alert(JSON.stringify(x))
            }}>Submit</button>
        </>
    )
}

function mapDispatchToProps(dispatch: Function) {
    return {
        currentQuiz: (quizId: string) => dispatch(setCurrentQuizAction(quizId))
    }
}


export default connect(null, mapDispatchToProps)(QuizPage)