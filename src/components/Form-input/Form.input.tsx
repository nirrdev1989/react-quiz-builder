import React from 'react'


function FormInput(props: any) {
    const { label, type, inlineLabel, ...rest } = props
    // console.log(props)
    return (
        <React.Fragment>
            <div className="form-floating mb-3">
                <input
                    {...rest}
                    type={type}
                />
                <label>{label}</label>
            </div>
        </React.Fragment>
    )
}

export default FormInput