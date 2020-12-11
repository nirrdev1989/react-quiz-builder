import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import QuizCardItem from '../Quiz-card-item/Quiz.card.item'


function QuizzesList() {
    const quizzes = useSelector((state: RootState) => state.quizzes)

    // console.log('QUIZZES LIST RENDER', quizzes)

    return (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {
                Object.keys(quizzes).length !== 0 ?
                    (Object.entries(quizzes).map(([quizId, { quiz }]) => {
                        return <div key={quizId}>
                            <QuizCardItem
                                quizId={quizId}
                                quiz={quiz}
                            />
                        </div>
                    })) : (
                        <p >No Quizzes</p>
                    )
            }
        </div>
    )
}

export default QuizzesList