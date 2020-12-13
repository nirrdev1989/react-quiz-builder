import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import CardContainer from '../components/Card-container/Card.container'
// import AlertWindow from '../components/Alert-window/Alert.window'
import QuestionItem from '../components/Question-item/Question.item'
import QuizFinalResults from '../components/Quiz-final-results/Quiz.final.results'
import { QuizResults } from '../redux/quiz/model'
import { setCurrentQuizAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'


let results: QuizResults

function QuizPage({ currentQuiz, match }: any) {
    const { quiz } = useSelector((state: RootState) => {
        const { quizId } = match.params
        results = state.currentQuiz
        return state.quizzes[quizId]
    })

    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    useEffect(() => {
        currentQuiz(match.params.quizId)
    }, [match.params.quizId])


    return (
        <React.Fragment>
            <CardContainer>
                <h3>Title: {quiz.title}</h3>
                <hr />
                <p><strong>Description:</strong> {quiz.description}</p>
                <br />
            </CardContainer>
            { isSubmit ?
                <QuizFinalResults
                    onBack={() => setIsSubmit(!isSubmit)}
                    results={results} /> :
                <CardContainer>
                    {quiz.questions.map((question, index) => {
                        return <div key={question.questionId}>
                            <QuestionItem question={question} />
                        </div>
                    })}
                    <button
                        className="btn btn-blue btn-sm"
                        onClick={() => {
                            if (results.answers.length < quiz.questions.length) {
                                return alert('Quiz did not completed')
                            }
                            setIsSubmit(!isSubmit)
                        }} >
                        Submit
                    </button>
                    <p className="float-end mb-1">
                        <a href="#">Back to top</a>
                    </p>
                </CardContainer>}
        </React.Fragment>
    )
}



function mapDispatchToProps(dispatch: Function) {
    return {
        currentQuiz: (quizId: string) => dispatch(setCurrentQuizAction(quizId))
    }
}


export default connect(null, mapDispatchToProps)(QuizPage)