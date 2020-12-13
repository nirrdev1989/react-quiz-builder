import React, { PropsWithChildren } from 'react'
import CardContainer from '../Card-container/Card.container'

interface AnswerItemProps extends PropsWithChildren<any> {
    answer: string
    index: number
}

function AnswerItem({ children, answer, index }: AnswerItemProps) {
    return (
        <React.Fragment>
            {/* <CardContainer> */}
            <li
                id="answer-item"
                className="d-flex justify-content-between align-items-center">
                <div>
                    <strong> {index + 1} : &nbsp;</strong>
                    <span className="question-accordion">{answer}</span>
                </div>
                {children}
            </li>

            {/* </CardContainer> */}

            {/* <div className="d-flex text-muted pt-3">
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="">
                        <strong className="text-dark">{index + 1}</strong>
                        <a href="#">Follow</a>
                        {children}
                    </div>
                    <span className="d-block">@username</span>
                    {answer}
                </div>
            </div> */}
        </React.Fragment>
    )
}

export default AnswerItem