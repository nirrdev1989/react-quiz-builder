import { Quiz, QuizResultsUnswer } from "./model";


export const ADD_QUIZ = 'ADD_QUIZ'
export const REMOVE_QUIZ = 'REMOVE_QUIZ'

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


export type QuizActionsTypes =
    AddQuizActionType |
    RemoveQuizActionType |
    SetCurrentQuizActionType |
    SetUnswerActionType