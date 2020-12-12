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

export const REMOVE_Question = 'REMOVE_Question'
export const ADD_Question = 'ADD_Question'
export const REMOVE_UNSWER = 'REMOVE_UNSWER'
export const ADD_UNSWER = 'ADD_UNSWER'
export const EDIT_Question = 'EDIT_Question'

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

export interface SetAnswerActionType {
    type: typeof SET_UNSWER,
    payload: QuizResultsAnswer
}

export interface EditQuizMainActionType {
    type: typeof EDIT_QUIZ_MAIN,
    payload: QuizEditMain
}

export interface RemoveQuestionActionType {
    type: typeof REMOVE_Question,
    payload: RemoveQuestion
}

export interface AddQuestionActionType {
    type: typeof ADD_Question,
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
    type: typeof EDIT_Question
    payload: EditQuestion
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
    EditQuestionActionType