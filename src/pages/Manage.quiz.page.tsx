import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import According from '../components/According-list/According'
import AddQestionForm from '../components/Add-qestion-form/Add.qestion.form'
import { AddQestion, Qestion } from '../redux/quiz/model'
import { addQestionAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'


function ManageQuizPage({ addQestion, match }: any) {
    const { quizId } = match.params

    const { quiz } = useSelector((state: RootState) => state.quizzes[quizId])

    const [isAddQestion, setIsAddQwestion] = useState<boolean>(false)


    function getQestion(qestion: Qestion) {

        addQestion({ quizId: quizId, qestion: qestion })

        setIsAddQwestion(!isAddQestion)
    }


    return (
        <div>
            <h4>
                Title: {quiz.title}
                <span style={{ float: 'right' }}>
                    {!isAddQestion &&
                        (<button
                            className="btn btn-dark btn-sm"
                            onClick={() => setIsAddQwestion(!isAddQestion)}
                        >
                            Add qestion   +
                        </button>)
                    }
                </span>
            </h4>
            <hr />
            <p>Description: {quiz.description}</p>
            {isAddQestion &&
                <AddQestionForm
                    closeAddQestionForm={() => setIsAddQwestion(!isAddQestion)}
                    addQestion={getQestion}
                />
            }
            <br />
            <According
                quizId={quizId}
                qestions={quiz.qestions}
            />
        </div>
    )

}


function mapDispatchToState(dispatch: Function) {
    return {
        addQestion: (info: AddQestion) => dispatch(addQestionAction(info))
    }
}


export default connect(null, mapDispatchToState)(ManageQuizPage)