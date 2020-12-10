import { AddQestion, Quiz, QuizEditMain, QuizResultsUnswer, RemoveQestion } from "./model";


export const ADD_QUIZ = 'ADD_QUIZ'
export const REMOVE_QUIZ = 'REMOVE_QUIZ'
export const EDIT_QUIZ_MAIN = 'EDIT_QUIZ_MAIN'

export const REMOVE_QESTION = 'REMOVE_QESTION'
export const ADD_QESTION = 'ADD_QESTION'

export const SET_CURRENT_QUIZ = 'SET_CURRENT_QUIZ'
export const SET_UNSWER = 'SET_UNSWER'




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

export interface SetUnswerActionType {
    type: typeof SET_UNSWER,
    payload: QuizResultsUnswer
}

export interface EditQuizMainActionType {
    type: typeof EDIT_QUIZ_MAIN,
    payload: QuizEditMain
}

export interface RemoveQestionActionType {
    type: typeof REMOVE_QESTION,
    payload: RemoveQestion
}

export interface AddQestionActionType {
    type: typeof ADD_QESTION,
    payload: AddQestion
}


export type QuizActionsTypes =
    AddQuizActionType |
    RemoveQuizActionType |
    SetCurrentQuizActionType |
    SetUnswerActionType |
    EditQuizMainActionType |
    RemoveQestionActionType |
    AddQestionActionType 