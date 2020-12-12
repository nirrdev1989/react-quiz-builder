import React from 'react'


function FormInput(props: any) {
    const { label, ...rest } = props
    // console.log(props)
    return (
        <React.Fragment>
            <input className="form-control" {...rest} />
            <label>{label}</label>
        </React.Fragment>
    )
}

export default FormInput