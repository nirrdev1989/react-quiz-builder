import React, { ChangeEvent, FormEvent } from 'react'
import { firstChartToUpperCase } from '../../utils/first.chart.uppercase'


interface EditFormProps {
    propery: string
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: FormEvent) => void
    closeEditForm: () => void
    hight?: string
}

function EditForm({ propery, handleChange, handleSubmit, closeEditForm }: EditFormProps) {

    return <React.Fragment>
        <form onSubmit={handleSubmit}>
            <label className="mb-3">{firstChartToUpperCase(propery)}*</label>
            <div className="center-element">
                <input
                    // style={{ height: hight }}
                    required
                    placeholder={firstChartToUpperCase(propery)}
                    className="form-control"
                    onChange={handleChange}
                    type="text"
                    name={propery} />
            </div>
            <div className="mt-3">
                <button
                    type="submit"
                    className="btn btn-blue btn-sm">
                    Save
                </button>
                &nbsp;
                <button
                    className="btn btn-pink btn-sm"
                    type="button"
                    onClick={closeEditForm}>
                    Cancel
                </button>
            </div>
        </form>
    </React.Fragment>
}


export default EditForm