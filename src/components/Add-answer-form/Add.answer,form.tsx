import React, { FormEvent, useState } from 'react'


function AddAnswerForm({ addAnswer, closeAddAnswerForm }: any) {

    const [answer, setAnswer] = useState<string>('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        addAnswer(answer)
    }

    function resetAddAnswerForm() {
        setAnswer(() => '')
    }

    return <React.Fragment>
        <form onSubmit={handleSubmit} className="mt-3">
            <label>Answer*</label>
            <div className="center-element">
                <input
                    required
                    className="form-control"
                    type="text"
                    placeholder="Answer"
                    onChange={(event) => setAnswer(() => event.target.value)}
                />
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
