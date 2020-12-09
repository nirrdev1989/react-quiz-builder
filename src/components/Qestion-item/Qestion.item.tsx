import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Qestion, QuizResultsUnswer } from '../../redux/quiz/model'
import { setUnswerAction } from '../../redux/quiz/quiz.action'


interface QestionItemProps {
    qestion: Qestion
    setUnswer: (unswerResult: QuizResultsUnswer) => void
}


function QestionItem({ setUnswer, qestion }: QestionItemProps) {

    function handleUnswerChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        setUnswer({
            qestion: qestion.qestion,
            choosenUnswer: value
        })

    }

    return (
        <div>
            <span>
                <strong> Qestion: </strong> {qestion.qestion}
            </span>
            <br />

            {
                qestion.unswers.map((unswer, index) => {
                    return <div key={index}>
                        <input
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
        </div>
    )
}


function mapDispatchToProps(dispatch: Function) {
    return {
        setUnswer: (unswerResult: QuizResultsUnswer) => dispatch(setUnswerAction(unswerResult))
    }
}

export default connect(null, mapDispatchToProps)(QestionItem)