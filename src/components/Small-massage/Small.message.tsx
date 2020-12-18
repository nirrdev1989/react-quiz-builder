import React from 'react'

interface SmallMessageProps {
    message: string
    color: string
}

function SmallMessage({ message, color }: SmallMessageProps) {
    return <React.Fragment>
        <small style={{ color: color, fontSize: '12px' }} >{message}</small>
    </React.Fragment>
}


export default SmallMessage