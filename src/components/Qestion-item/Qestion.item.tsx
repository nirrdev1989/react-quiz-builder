import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Qestion, QuizResultsUnswer, QuizResults } from '../../redux/quiz/model'
import { setUnswerAction } from '../../redux/quiz/quiz.action'


interface QestionItemProps {
    qestion: Qestion
    setUnswer: (unswerResult: QuizResultsUnswer) => void
    results: QuizResults
}


function QestionItem({ setUnswer, qestion, results }: QestionItemProps) {

    function handleUnswerChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target

        setUnswer({
            qestion: qestion.qestion,
            choosenUnswer: value
        })

    }

    return (
        <React.Fragment>
            <span>
                <strong> Qestion: </strong> {qestion.qestion}
            </span>
            <br />
            {
                qestion.numberOfUnswers > 1 &&
                qestion.unswers.map((unswer, index) => {
                    // console.log(results)
                    return <div key={index}>
                        <input
                            style={{ marginRight: '0.5rem' }}
                            name={qestion.qestion}
                            type="radio"
                            value={unswer}
                            onChange={handleUnswerChange}
                        />
                        {unswer}
                    </div>
                })
            }
            <hr />
        </React.Fragment>
    )
}


function mapDispatchToProps(dispatch: Function) {
    return {
        setUnswer: (unswerResult: QuizResultsUnswer) => dispatch(setUnswerAction(unswerResult))
    }
}

export default connect(null, mapDispatchToProps)(QestionItem)