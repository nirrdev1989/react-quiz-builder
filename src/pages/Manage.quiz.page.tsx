import React, { ChangeEvent, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import AccordingList from '../components/According-list/According.list'
import AddQestionForm from '../components/Add-qestion-form/Add.qestion.form'
import { AddQestion, Qestion, QuizEditMain } from '../redux/quiz/model'
import { addQestionAction, editQuizMainAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'
import { ReactComponent as EditIcon } from "../icons-svg/edit.svg";
import AlertWindow from '../components/Alert-window/Alert.window'
import { firstChartToUpperCase } from '../utils/first.chart.uppercase'

interface ManageQuizPageProps {
    editQuizMain: (info: QuizEditMain) => void
    addQestion: (info: AddQestion) => void
    match: any
}


function ManageQuizPage({ addQestion, editQuizMain, match }: ManageQuizPageProps) {
    const { quizId } = match.params

    const { quiz } = useSelector((state: RootState) => state.quizzes[quizId])

    const [isAddQestion, setIsAddQwestion] = useState<boolean>(false)

    const [isEditMode, setIsEditMode] = useState<boolean>(false)

    const [editInfo, setEditInfo] = useState<QuizEditMain>({
        quizId: quizId,
        propery: 'title' || 'description',
        value: ''
    })


    function getQestion(qestion: Qestion) {

        addQestion({ quizId: quizId, qestion: qestion })

        setIsAddQwestion(!isAddQestion)
    }


    function handelEditChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setEditInfo((prev) => {
            return {
                ...prev,
                propery: editInfo.propery,
                value: value
            }
        })
    }

    return (
        <React.Fragment>
            { isEditMode ?
                <AlertWindow
                    color={'warning'}
                >
                    <label className="mb-1">{firstChartToUpperCase(editInfo.propery)}*</label>
                    <div className="center-element">
                        <input
                            required
                            className="form-control"
                            onChange={handelEditChange}
                            type="text"
                            name={editInfo.propery}
                            placeholder={firstChartToUpperCase(editInfo.propery)}
                        />

                    </div>
                    <div className="mt-3">
                        <button
                            type="submit"
                            className="btn btn-blue btn-sm"
                            onClick={() => {
                                if (editInfo.value !== '' && editInfo.value !== null) {
                                    editQuizMain(editInfo)
                                    setIsEditMode(!isEditMode)
                                }
                            }}
                        >
                            Save
                    </button>
                     &nbsp;
                     <button
                            className="btn btn-pink btn-sm"
                            onClick={() => setIsEditMode(!isEditMode)}
                        >
                            Cencel
                    </button>
                    </div>
                </AlertWindow> :
                <React.Fragment>
                    <h4>
                        <EditIcon className="edit-icon" onClick={() => {
                            setIsEditMode(!isEditMode)
                            setEditInfo((prev) => {
                                return {
                                    ...prev,
                                    propery: 'title',
                                    value: ''
                                }
                            })
                        }} />
                        Title: {quiz.title}
                        <span style={{ float: 'right' }}>
                            {!isAddQestion &&
                                (<button
                                    className="btn btn-balck btn-sm"
                                    onClick={() => setIsAddQwestion(!isAddQestion)}
                                >
                                    Add qestion   +
                                </button>)
                            }
                        </span>
                    </h4>
                    <hr />
                    <p> <EditIcon className="edit-icon" onClick={() => {
                        setIsEditMode(!isEditMode)
                        setEditInfo((prev) => {
                            return {
                                ...prev,
                                propery: 'description',
                                value: ''
                            }
                        })
                    }} /><strong>Description: </strong> {quiz.description}</p>
                    {isAddQestion &&
                        <AddQestionForm
                            closeAddQestionForm={() => setIsAddQwestion(!isAddQestion)}
                            addQestion={getQestion}
                        />
                    }
                    <br />
                    <AccordingList
                        quizId={quizId}
                        qestions={quiz.qestions}
                    />
                </React.Fragment>
            }
        </React.Fragment>
    )

}


function mapDispatchToState(dispatch: Function) {
    return {
        addQestion: (info: AddQestion) => dispatch(addQestionAction(info)),
        editQuizMain: (info: QuizEditMain) => dispatch(editQuizMainAction(info))
    }
}


export default connect(null, mapDispatchToState)(ManageQuizPage)