import React from 'react'

interface SmallMessageProps {
    message: string
    color: string
}

function SmallMessage({ message, color }: SmallMessageProps) {
    return <React.Fragment>
        <strong> <small style={{ color: color, fontSize: '12px' }} >{message}</small></strong>
    </React.Fragment>
}


export default SmallMessage