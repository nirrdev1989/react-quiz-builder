import React from 'react'


interface QuizTitleProps {
    value: string
    dateCreated?: string
}

interface QuizDescriptionProps {
    value: string

}


export function QuizTitle({ value, dateCreated }: QuizTitleProps) {
    return <React.Fragment>
        <strong>Title:</strong> <span>{value}</span>
        <h6>
            <small style={{ fontSize: '12px' }}>{dateCreated}</small>
        </h6>
    </React.Fragment>
}

export function QuizDescription({ value }: QuizDescriptionProps) {
    return <React.Fragment>
        <strong>Description:</strong> <span>{value}</span>
    </React.Fragment>
}


