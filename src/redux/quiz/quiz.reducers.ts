import { getLocalStorage, saveLoaclStorage } from "../localstorage";
import { QuizResults, Quizzes } from "./model";
import {
    QuizActionsTypes,
    ADD_QUIZ,
    EDIT_QUIZ_MAIN,
    REMOVE_Question,
    REMOVE_QUIZ,
    SET_CURRENT_QUIZ,
    SET_UNSWER,
    ADD_Question,
    REMOVE_UNSWER,
    ADD_UNSWER,
    EDIT_Question,
} from "./quiz.actions.types";


import * as QuizzesUtils from './utils'


export type QuizzesState = Quizzes


const INITIAL_STATE_QUIZZES: QuizzesState = getLocalStorage('quizzes')


export function quizReducer(state = INITIAL_STATE_QUIZZES, action: QuizActionsTypes): QuizzesState {
    switch (action.type) {
        case ADD_QUIZ:
            const newStateAfterAdd = QuizzesUtils.createQuizUtil(state, action)
            saveLoaclStorage('quizzes', newStateAfterAdd)

            return newStateAfterAdd
        case REMOVE_QUIZ:
            const newStateAfterRemove = QuizzesUtils.removeQuizUtil(state, action)
            saveLoaclStorage('quizzes', newStateAfterRemove)

            return newStateAfterRemove
        case EDIT_QUIZ_MAIN:
            const newStateAfterUpdateMain = QuizzesUtils.editQuizMainUtil(state, action)
            saveLoaclStorage('quizzes', newStateAfterUpdateMain)

            return newStateAfterUpdateMain
        case REMOVE_Question:
            const newSateAfterRemoveQuestion = QuizzesUtils.removeQuestionUtil(state, action)
            saveLoaclStorage('quizzes', newSateAfterRemoveQuestion)

            return newSateAfterRemoveQuestion
        case ADD_Question:
            const newSateAfterAddQuestion = QuizzesUtils.addQuestionUtil(state, action)
            saveLoaclStorage('quizzes', newSateAfterAddQuestion)

            return newSateAfterAddQuestion

        case REMOVE_UNSWER:
            const newStateAfterRemoveAnswer = QuizzesUtils.removeAnswerUtil(state, action)
            saveLoaclStorage('quizzes', newStateAfterRemoveAnswer)

            return newStateAfterRemoveAnswer
        case ADD_UNSWER:
            const newStateAfterAddAnswer = QuizzesUtils.addAnswerUtil(state, action)
            saveLoaclStorage('quizzes', newStateAfterAddAnswer)

            return newStateAfterAddAnswer
        case EDIT_Question:
            const newStateAfterEditQuestion = QuizzesUtils.editQuestionUtil(state, action)
            saveLoaclStorage('quizzes', newStateAfterEditQuestion)

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
