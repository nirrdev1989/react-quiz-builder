import React from 'react'

// interface ButtonProps extends ButtonProps {

// }

function Button({ children, ...rest }: any) {

    return (
        <div>
            <button {...rest}>{children}</button>
        </div>
    )
}

export default Button