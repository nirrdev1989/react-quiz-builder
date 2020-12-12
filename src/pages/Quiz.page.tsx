import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
// import AlertWindow from '../components/Alert-window/Alert.window'
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

    // const [isSubmit, setIsSubmit] = useState<boolean>(false)


    useEffect(() => {
        currentQuiz(match.params.quizId)
    }, [match.params.quizId])


    return (
        <React.Fragment>
            <h3>{quiz.title}</h3>
            <hr />
            <br />
            {
                quiz.qestions.map((qestion, index) => {
                    return <div key={qestion.qestionId}>
                        <QestionItem results={results} qestion={qestion} />
                    </div>
                })
            }
            <button
                className="btn btn-blue btn-sm"
                onClick={() => {
                    if (results.unswers.length < quiz.qestions.length) {
                        return alert('חוסר תשובות אנא השלם את השאלון')
                    }
                    alert(`${results.unswers.map((unswer, index) => {
                        return `${index}. ${unswer.qestion}:  ${unswer.choosenUnswer} /`
                    })}`)
                    // setIsSubmit(!isSubmit)
                }}
            >
                Submit
             </button>
        </React.Fragment>
    )
}



function mapDispatchToProps(dispatch: Function) {
    return {
        currentQuiz: (quizId: string) => dispatch(setCurrentQuizAction(quizId))
    }
}


export default connect(null, mapDispatchToProps)(QuizPage)