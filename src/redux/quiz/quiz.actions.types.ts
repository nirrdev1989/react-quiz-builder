import { Quiz } from "./model";


export const ADD_QUIZ = 'ADD_QUIZ'
export const REMOVE_QUIZ = 'REMOVE_QUIZ'


export interface AddQuizAction {
    type: typeof ADD_QUIZ,
    payload: Quiz
}

export interface RemoveQuiz {
    type: typeof REMOVE_QUIZ,
    payload: string
}


export type QuizActions = AddQuizAction | RemoveQuiz