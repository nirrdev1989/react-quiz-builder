import { getSessionStorage, saveSessionStorage } from "../localstorage";
import { QuizResults, Quizzes } from "./model";
import {
    QuizActionsTypes,
    EDIT_QUESTION,
    ADD_UNSWER,
    REMOVE_UNSWER,
    EDIT_QUIZ_MAIN,
    SET_UNSWER,
    ADD_QUESTION,
    REMOVE_QUESTION,
    SET_CURRENT_QUIZ,
    REMOVE_QUIZ,
    ADD_QUIZ,
} from "./quiz.actions.types";


import * as QuizzesUtils from './utils'


export type QuizzesState = Quizzes


const INITIAL_STATE_QUIZZES: QuizzesState = getSessionStorage('quizzes')


export function quizReducer(state = INITIAL_STATE_QUIZZES, action: QuizActionsTypes): QuizzesState {
    switch (action.type) {
        case ADD_QUIZ:
            const newStateAfterAdd = QuizzesUtils.createQuizUtil(state, action)
            saveSessionStorage('quizzes', newStateAfterAdd)

            return newStateAfterAdd
        case REMOVE_QUIZ:
            const newStateAfterRemove = QuizzesUtils.removeQuizUtil(state, action)
            saveSessionStorage('quizzes', newStateAfterRemove)

            return newStateAfterRemove
        case EDIT_QUIZ_MAIN:
            const newStateAfterUpdateMain = QuizzesUtils.editQuizMainUtil(state, action)
            saveSessionStorage('quizzes', newStateAfterUpdateMain)

            return newStateAfterUpdateMain
        case REMOVE_QUESTION:
            const newSateAfterRemoveQuestion = QuizzesUtils.removeQuestionUtil(state, action)
            saveSessionStorage('quizzes', newSateAfterRemoveQuestion)

            return newSateAfterRemoveQuestion
        case ADD_QUESTION:
            const newSateAfterAddQuestion = QuizzesUtils.addQuestionUtil(state, action)
            saveSessionStorage('quizzes', newSateAfterAddQuestion)

            return newSateAfterAddQuestion

        case REMOVE_UNSWER:
            const newStateAfterRemoveAnswer = QuizzesUtils.removeAnswerUtil(state, action)
            saveSessionStorage('quizzes', newStateAfterRemoveAnswer)

            return newStateAfterRemoveAnswer
        case ADD_UNSWER:
            const newStateAfterAddAnswer = QuizzesUtils.addAnswerUtil(state, action)
            saveSessionStorage('quizzes', newStateAfterAddAnswer)

            return newStateAfterAddAnswer
        case EDIT_QUESTION:
            const newStateAfterEditQuestion = QuizzesUtils.editQuestionUtil(state, action)
            saveSessionStorage('quizzes', newStateAfterEditQuestion)

            return newStateAfterEditQuestion
        default:
            return state
    }

}


const INITIAL_STATE_RESULTS: QuizResults = {
    quizId: '',
    answers: []
}


export function quizResultsReducer(state = INITIAL_STATE_RESULTS, action: QuizActionsTypes): QuizResults {
    switch (action.type) {
        case SET_CURRENT_QUIZ:
            return QuizzesUtils.setCurrentQuizUtil(state, action)
        case SET_UNSWER:
            return QuizzesUtils.setAnswerUtil(state, action)
        default:
            return state
    }
}
