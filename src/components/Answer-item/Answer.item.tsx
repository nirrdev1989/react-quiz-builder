import React, { PropsWithChildren } from 'react'

interface AnswerItemProps extends PropsWithChildren<any> {
    answer: string
    index: number
}

function AnswerItem({ children, answer, index }: AnswerItemProps) {
    return (
        <React.Fragment>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong> {index + 1} : &nbsp;</strong>
                    <span className="question-accordion">{answer}</span>
                </div>
                {children}
            </li>
        </React.Fragment>
    )
}

export default AnswerItem