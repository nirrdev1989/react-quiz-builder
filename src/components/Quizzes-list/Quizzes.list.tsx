import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import QuizCardItem from '../Quiz-card-item/Quiz.card.item'


function QuizzesList() {
    const quizzes = useSelector((state: RootState) => state.quizzes)

    return (
        <React.Fragment>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {Object.keys(quizzes).length !== 0 ?
                    (Object.entries(quizzes).map(([quizId, { quiz }]) => {
                        return <div key={quizId}>
                            <QuizCardItem
                                quizId={quizId}
                                quiz={quiz}
                            />
                        </div>
                    })) : (
                        <h3 >No Quizzes</h3>
                    )}
            </div>
        </React.Fragment>
    )
}

export default QuizzesList