import React from 'react'
import CardContainer from '../components/Card-container/Card.container'
import CreateMainQuiz from '../components/Create.main-quiz/Create.main.quiz'

export default function CreateQuizPage() {
    return (
        <React.Fragment>
            <CardContainer>
                <CreateMainQuiz />
            </CardContainer>
        </React.Fragment>
    )
}