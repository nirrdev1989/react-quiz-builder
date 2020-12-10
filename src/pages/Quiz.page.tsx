import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import AlertWindow from '../components/Alert-window/Alert.window'
import QestionItem from '../components/Qestion-item/Qestion.item'
import { QuizResults } from '../redux/quiz/model'
import { setCurrentQuizAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'

let results: QuizResults

function QuizPage({ currentQuiz, match }: any) {
    const { quiz } = useSelector((state: RootState) => {
        const { quizId } = match.params
        const quizUnswers = state.currentQuiz
        results = quizUnswers
        return state.quizzes[quizId]
    })

    const [isSubmit, setIsSubmit] = useState<boolean>(false)


    useEffect(() => {
        currentQuiz(match.params.quizId)
    }, [match.params.quizId])


    return (
        <>
            <h3>{quiz.title}</h3>
            {isSubmit ?
                <AlertWindow
                    closeWindow={() => setIsSubmit(!isSubmit)}

                >
                    {
                        results.unswers.map((resultUnswer, index: number) => {
                            return <div key={index}>
                                Qestion: {index + 1}<p>{resultUnswer.qestion}</p>
                                Unswer: <p>{resultUnswer.choosenUnswer}</p>
                                <hr />
                            </div>
                        })
                    }
                </AlertWindow> : null
            }
            <hr />
            <br />
            {
                quiz.qestions.map((qestion, index) => {
                    return <div key={qestion.qestionId}>
                        <QestionItem qestion={qestion} />
                    </div>
                })
            }

            {/* <EditIcon
                        className="edit-quiz-btn"
                        // data-bs-toggle="modal"
                        // data-bs-target="#exampleModal"
                        onClick={() => { alert('עוד לא עובד') }}
                     /> */}

            <button
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                    if (results.unswers.length < quiz.qestions.length) {
                        return alert('חוסר תשובות אנא השלם את השאלון')
                    }
                    setIsSubmit(!isSubmit)
                    // console.log(results)
                    // alert(` 
                    //     Quiz id:  ${JSON.stringify(results.quizId)}
                    //     Unswers:  ${JSON.stringify(results.unswers)}`
                    // )
                }}
            >
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