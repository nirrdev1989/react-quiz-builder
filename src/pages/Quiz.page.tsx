import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
// import AlertWindow from '../components/Alert-window/Alert.window'
import QuestionItem from '../components/Question-item/Question.item'
import { QuizResults } from '../redux/quiz/model'
import { setCurrentQuizAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'

let results: QuizResults

function QuizPage({ currentQuiz, match }: any) {
    const { quiz } = useSelector((state: RootState) => {
        const { quizId } = match.params
        const quizAnswers = state.currentQuiz
        results = quizAnswers
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
                quiz.questions.map((question, index) => {
                    return <div key={question.questionId}>
                        <QuestionItem results={results} question={question} />
                    </div>
                })
            }
            <button
                className="btn btn-blue btn-sm"
                onClick={() => {
                    if (results.answers.length < quiz.questions.length) {
                        return alert('חוסר תשובות אנא השלם את השאלון')
                    }
                    alert(`${results.answers.map((answer, index) => {
                        return `${index}. ${answer.question}:  ${answer.choosenAnswer} /`
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