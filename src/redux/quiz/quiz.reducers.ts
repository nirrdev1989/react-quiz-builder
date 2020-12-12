import { getLocalStorage, saveLoaclStorage } from "../localstorage";
import { QuizResults, Quizzes } from "./model";
import {
    QuizActionsTypes,
    ADD_QUIZ,
    EDIT_QUIZ_MAIN,
    REMOVE_QESTION,
    REMOVE_QUIZ,
    SET_CURRENT_QUIZ,
    SET_UNSWER,
    ADD_QESTION,
    REMOVE_UNSWER,
    ADD_UNSWER,
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
            const { propery, value, quizId } = action.payload
            const quizFound = state[quizId].quiz
            quizFound[propery] = value

            const newStateAfterUpdateMain = {
                ...state,
                [quizId]: {
                    quiz: quizFound
                }
            }

            return newStateAfterUpdateMain
        case REMOVE_QESTION:
            const newSateAfterRemoveQestion = QuizzesUtils.removeQestionUtil(state, action)
            saveLoaclStorage('quizzes', newSateAfterRemoveQestion)

            return newSateAfterRemoveQestion
        case ADD_QESTION:
            const newSateAfterAddQestion = QuizzesUtils.addQestionUtil(state, action)
            saveLoaclStorage('quizzes', newSateAfterAddQestion)

            return newSateAfterAddQestion

        case REMOVE_UNSWER:
            const newStateAfterRemoveUnswer = QuizzesUtils.removeUnswerUtil(state, action)
            saveLoaclStorage('quizzes', newStateAfterRemoveUnswer)

            return newStateAfterRemoveUnswer
        case ADD_UNSWER:
            const newStateAfterAddUnswer = QuizzesUtils.addUnswerUtil(state, action)
            saveLoaclStorage('quizzes', newStateAfterAddUnswer)

            return newStateAfterAddUnswer
        default:
            return state
    }

}


const INITIAL_STATE_RESULTS: QuizResults = {
    quizId: '',
    unswers: []
}


export function quizResultsReducer(state = INITIAL_STATE_RESULTS, action: QuizActionsTypes): QuizResults {
    switch (action.type) {
        case SET_CURRENT_QUIZ:
            return QuizzesUtils.setCurrentQuizUtil(state, action)
        case SET_UNSWER:
            return QuizzesUtils.setUnswerUtil(state, action)
        default:
            return state
    }
}
