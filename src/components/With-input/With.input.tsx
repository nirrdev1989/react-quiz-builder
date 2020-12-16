import React, { FormEvent, useState } from 'react'
import { ReactComponent as EditIcon } from "../../icons-svg/edit.svg";
import { firstChartToUpperCase } from '../../utils/first.chart.uppercase';


function WithInput(Component: React.FC<any>) {
    return function Input({ property, value, outPutNewValue, ...props }: any) {

        const [newValue, setNewValue] = useState<string>(value)
        const [isEditMode, setIsEditMode] = useState<boolean>(false)

        function handleSubmit(event: FormEvent) {
            event.preventDefault()
            outPutNewValue(newValue, property)
            switchEditMode()
        }

        function switchEditMode() {
            setIsEditMode(!isEditMode)
        }


        return <React.Fragment>
            {!isEditMode &&
                <EditIcon
                    className="edit-icon"
                    onClick={switchEditMode}
                />}
            {isEditMode ?
                (<form onSubmit={handleSubmit}>
                    <label className="mb-3">{firstChartToUpperCase(property)}*</label>
                    <div className="center-element">
                        <input
                            placeholder={firstChartToUpperCase(property)}
                            required
                            className="form-control"
                            onChange={(event) => setNewValue(() => event.target.value)}
                            name={newValue || ''}
                            value={newValue || ''}
                            type="text" />
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
                            onClick={() => {
                                setNewValue(() => value)
                                switchEditMode()
                            }} >
                            Cancel
                      </button>
                    </div>
                </form>) : (
                    <React.Fragment>
                        &nbsp;  <Component value={newValue} {...props} />
                    </React.Fragment>
                )}
        </React.Fragment>
    }
}


export default WithInput