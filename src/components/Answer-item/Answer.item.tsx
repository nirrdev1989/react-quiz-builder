import React, { PropsWithChildren } from 'react'


interface AnswerItemProps extends PropsWithChildren<any> {
    answer: string
    index?: number
}

function AnswerItem({ children, answer, index }: AnswerItemProps) {
    return (
        <React.Fragment>
            <li
                id="answer-item"
                className="d-flex justify-content-between align-items-center">
                <div>
                    {index !== undefined && <strong> {index + 1} : &nbsp;</strong>}
                    <span className="question-accordion">{answer}</span>
                </div>
                {children && children}
            </li>
        </React.Fragment>
    )
}


export default AnswerItem