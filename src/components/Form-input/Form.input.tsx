import React from 'react'


function FormInput(props: any) {
    const { label, type, ...rest } = props
    // console.log(props)
    return (
        <React.Fragment>
            <div className="form-floating mb-3">
                <input
                    // style={{ height: '0.7rem' }}
                    {...rest}
                    type={type}
                />
                <label>{label}</label>
            </div>
        </React.Fragment>
    )
}

export default FormInput