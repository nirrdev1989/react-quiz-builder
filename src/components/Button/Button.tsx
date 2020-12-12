import React from 'react'

// interface ButtonProps extends ButtonProps {

// }

function Button({ children, ...rest }: any) {

    return (
        <React.Fragment>
            <button {...rest}>{children}</button>
        </React.Fragment>
    )
}

export default Button