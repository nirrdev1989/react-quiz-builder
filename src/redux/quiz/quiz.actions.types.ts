import {
    AddQuestion,
    AddAnswer,
    EditQuestion,
    Quiz,
    QuizEditMain,
    QuizResultsAnswer,
    RemoveQuestion,
    RemoveAnswer
} from "./model";


export const ADD_QUIZ = 'ADD_QUIZ'
export const REMOVE_QUIZ = 'REMOVE_QUIZ'
export const EDIT_QUIZ_MAIN = 'EDIT_QUIZ_MAIN'

export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_UNSWER = 'REMOVE_UNSWER'
export const ADD_UNSWER = 'ADD_UNSWER'
export const EDIT_QUESTION = 'EDIT_QUESTION'
export const PUBLISH_QUIZ = 'PUBLISH_QUIZ'

export const SET_CURRENT_QUIZ = 'SET_CURRENT_QUIZ'
export const SET_UNSWER = 'SET_UNSWER'



// export const QUIZ_ACTIONS_TYPES = {
//     ADD_QUIZ: 'ADD_QUIZ',
//     REMOVE_QUIZ: 'REMOVE_QUIZ',
//     EDIT_QUIZ_MAIN: 'EDIT_QUIZ_MAIN',
//     REMOVE_Question: 'REMOVE_Question',
//     ADD_Question: 'ADD_Question',
//     REMOVE_UNSWER: 'REMOVE_UNSWER',
//     ADD_UNSWER: 'ADD_UNSWER',
//     EDIT_Question: 'EDIT_Question',
//     SET_CURRENT_QUIZ: 'SET_CURRENT_QUIZ',
//     SET_UNSWER: 'SET_UNSWER',
// }


export interface AddQuizActionType {
    type: typeof ADD_QUIZ,
    payload: Quiz
}

export interface RemoveQuizActionType {
    type: typeof REMOVE_QUIZ,
    payload: string
}

export interface SetCurrentQuizActionType {
    type: typeof SET_CURRENT_QUIZ,
    payload: string
}

export interface SetAnswerActionType {
    type: typeof SET_UNSWER,
    payload: QuizResultsAnswer
}

export interface EditQuizMainActionType {
    type: typeof EDIT_QUIZ_MAIN,
    payload: QuizEditMain
}

export interface RemoveQuestionActionType {
    type: typeof REMOVE_QUESTION,
    payload: RemoveQuestion
}

export interface AddQuestionActionType {
    type: typeof ADD_QUESTION,
    payload: AddQuestion
}

export interface RemoveAnswerActionType {
    type: typeof REMOVE_UNSWER,
    payload: RemoveAnswer
}

export interface AddAnswerActionType {
    type: typeof ADD_UNSWER,
    payload: AddAnswer
}

export interface EditQuestionActionType {
    type: typeof EDIT_QUESTION
    payload: EditQuestion
}

export interface PublishQuizActionType {
    type: typeof PUBLISH_QUIZ
    payload: string
}

export type QuizActionsTypes =
    AddQuizActionType |
    RemoveQuizActionType |
    SetCurrentQuizActionType |
    SetAnswerActionType |
    EditQuizMainActionType |
    RemoveQuestionActionType |
    AddQuestionActionType |
    RemoveAnswerActionType |
    AddAnswerActionType |
    EditQuestionActionType |
    PublishQuizActionType