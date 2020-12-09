import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import QuizCardItem from '../Quiz-card-item/Quiz.card.item'


function QuizzesList() {
    const quizzes = useSelector((state: RootState) => state.quizzes)

    console.log(Object.entries(quizzes))

    return (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {
                Object.keys(quizzes).length !== 0 ?
                    (Object.entries(quizzes).map(([quizId, { quiz }]) => {
                        return <div key={quizId}>
                            <QuizCardItem
                                quizId={quizId}
                                title={quiz.title}
                                description={quiz.description}
                                numberQestions={quiz.numberQestions}
                            />
                        </div>
                    })) : (
                        <span>No Quizzes</span>
                    )
            }
        </div>
    )
}

export default QuizzesList