import React, { ChangeEvent, useState } from 'react'
import { connect } from 'react-redux'
import { QuizEditMain } from '../../redux/quiz/model'
import { editQuizMainAction } from '../../redux/quiz/quiz.action'


interface EditQuizWindowProps {
    quizId: string
    // edit: QuizEditMain
    editQuizMain: (info: QuizEditMain) => void
    // outputEditData: (info: string) => void
}

function EditQuizWindow({ quizId, editQuizMain }: EditQuizWindowProps) {
    console.log(quizId)

    const [newValue, setNewValue] = useState<string>('')

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        if (!value) {
            return
        }

        setNewValue(value)
    }


    function getNewValue() {
        console.log(newValue)
        // outputEditData(newValue)
    }


    return (
        <>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-100}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLabel"
                            >
                                {/* Edit {edit.propery} */}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                data-bs-dismiss="modal"
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={() => {
                                    // editQuizMain(edit)
                                    getNewValue()
                                }}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function mapDispatchToProps(dispath: Function) {
    return {
        editQuizMain: (info: QuizEditMain) => dispath(editQuizMainAction(info))
    }
}


export default connect(null, mapDispatchToProps)(EditQuizWindow)