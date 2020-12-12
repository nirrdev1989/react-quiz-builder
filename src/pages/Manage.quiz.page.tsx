import React, { ChangeEvent, FormEvent, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import AccordingList from '../components/According-list/According.list'
import AddQuestionForm from '../components/Add-question-form/Add.question.form'
import { AddQuestion, Question, QuizEditMain } from '../redux/quiz/model'
import { addQuestionAction, editQuizMainAction } from '../redux/quiz/quiz.action'
import { RootState } from '../redux/store'
import { ReactComponent as EditIcon } from "../icons-svg/edit.svg";
import AlertWindow from '../components/Alert-window/Alert.window'
import EditForm from '../components/Edit-form/Edit.form'

interface ManageQuizPageProps {
    editQuizMain: (info: QuizEditMain) => void
    addQuestion: (info: AddQuestion) => void
    match: any
}


function ManageQuizPage({ addQuestion, editQuizMain, match }: ManageQuizPageProps) {
    const { quizId } = match.params

    const { quiz } = useSelector((state: RootState) => state.quizzes[quizId])

    const [isAddQuestion, setIsAddQwuestion] = useState<boolean>(false)

    const [isEditMode, setIsEditMode] = useState<boolean>(false)

    const [editInfo, setEditInfo] = useState<QuizEditMain>({
        quizId: quizId,
        propery: 'title' || 'description',
        value: ''
    })


    function getQuestion(question: Question) {

        addQuestion({ quizId: quizId, question: question })

        setIsAddQwuestion(!isAddQuestion)
    }


    function handelEditChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setEditInfo((prev) => {
            return {
                ...prev,
                propery: editInfo.propery,
                value: value
            }
        })
    }


    function handelEditSubmit(event: FormEvent) {
        event.preventDefault()

        if (editInfo.value !== '' && editInfo.value !== null) {
            editQuizMain(editInfo)
            setIsEditMode(!isEditMode)
        }
    }

    return (
        <React.Fragment>
            { isEditMode ?
                <AlertWindow color={'warning'}>
                    <EditForm
                        propery={editInfo.propery}
                        handleChange={handelEditChange}
                        closeEditForm={() => setIsEditMode(!isEditMode)}
                        handleSubmit={handelEditSubmit} />
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
                            {!isAddQuestion &&
                                (<button
                                    className="btn btn-blue btn-sm"
                                    onClick={() => setIsAddQwuestion(!isAddQuestion)}>
                                    Add question <strong>+</strong>
                                </button>)
                            }
                        </span>
                    </h4>
                    <hr />
                    <p>
                        <EditIcon className="edit-icon" onClick={() => {
                            setIsEditMode(!isEditMode)
                            setEditInfo((prev) => {
                                return {
                                    ...prev,
                                    propery: 'description',
                                    value: ''
                                }
                            })
                        }} />
                        <strong>Description: </strong> {quiz.description}
                    </p>
                    {isAddQuestion &&
                        <AddQuestionForm
                            closeAddQuestionForm={() => setIsAddQwuestion(!isAddQuestion)}
                            addQuestion={getQuestion} />
                    }
                    <br />
                    <AccordingList
                        quizId={quizId}
                        questions={quiz.questions} />
                </React.Fragment>
            }
        </React.Fragment>
    )

}


function mapDispatchToState(dispatch: Function) {
    return {
        addQuestion: (info: AddQuestion) => dispatch(addQuestionAction(info)),
        editQuizMain: (info: QuizEditMain) => dispatch(editQuizMainAction(info))
    }
}


export default connect(null, mapDispatchToState)(ManageQuizPage)