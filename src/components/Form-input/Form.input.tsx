import React from 'react'


function FormInput(props: any) {
    const { label, ...rest } = props
    console.log(props)
    return (
        <>
            <input className="form-control" {...rest} />
            <label>{label}</label>
        </>
    )
}

export default FormInput