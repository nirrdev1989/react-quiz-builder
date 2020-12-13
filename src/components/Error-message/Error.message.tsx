import React from 'react'


interface ErrorMessageProps {
    message: string
    show?: boolean
}

function ErrorMessage({ show, message }: ErrorMessageProps) {
    return <React.Fragment>
        {show &&
            <small
                className="text-danger"
                style={{ fontSize: '12px' }}>
                {message}
            </small>}
    </React.Fragment>
}


export default ErrorMessage