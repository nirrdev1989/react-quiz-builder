import React, { ChangeEvent, FormEvent, useState } from 'react'
// import { useForm } from '../../hooks/use.form'
import FormInput from '../Form-input/Form.input'
import SmallMessage from '../Small-massage/Small.message'




function AddAnswerForm({ addAnswer, closeAddAnswerForm }: any) {

    // const [values, handleChange, handleSubmit, isSubmit] = useForm('', callSubmit)
    const [answer, setAnswer] = useState<string>('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        addAnswer(answer)
    }

    function resetAddAnswerForm() {
        setAnswer(() => '')
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setAnswer(() => event.target.value)
    }

    // function callSubmit() {
    //     addAnswer(values)
    // }

    return <React.Fragment>
        <form onSubmit={handleSubmit} className="mt-3">
            <SmallMessage
                color="black"
                message={'Answer'}
            />
            <FormInput
                label="Answer*"
                required
                className="form-control"
                type="text"
                maxLength={100}
                placeholder="Answer"
                onChange={handleChange}
            />
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
                        closeAddAnswerForm()
                        resetAddAnswerForm()
                    }}>
                    Cancel
             </button>
            </div>
        </form>
    </React.Fragment>
}


export default AddAnswerForm
