import { QuizResults, Quizzes } from "./model";
import { ADD_QUIZ, QuizActionsTypes, REMOVE_QUIZ, SET_CURRENT_QUIZ, SET_UNSWER } from "./quiz.actions.types";


type QuizzesState = Quizzes


const INITIAL_STATE_QUIZZES: QuizzesState = getLocalStorage('quizzes')


export function quizReducer(state = INITIAL_STATE_QUIZZES, action: QuizActionsTypes): QuizzesState {
    switch (action.type) {
        case ADD_QUIZ:
            const newStateAfterAdd = {
                ...state,
                [String(Date.now())]: {
                    quiz: action.payload
                }
            }

            saveLoaclStorage('quizzes', newStateAfterAdd)

            return newStateAfterAdd
        case REMOVE_QUIZ:
            delete state[action.payload]

            const newStateAfterRemove = {
                ...state
            }

            saveLoaclStorage('quizzes', newStateAfterRemove)

            return newStateAfterRemove
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
            return {
                ...state,
                quizId: action.payload,
                unswers: []
            }
        case SET_UNSWER:
            let newUnswersState = [...state.unswers]
            const index = state.unswers.findIndex((unswer) => unswer.qestion === action.payload.qestion)
            if (index !== -1) {
                newUnswersState[index] = action.payload
            } else {
                newUnswersState = [...newUnswersState, action.payload]
            }

            return {
                ...state,
                unswers: newUnswersState
            }
        default:
            return state
    }
}


function saveLoaclStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key: string) {
    const localQuizzes = localStorage.getItem(key)
    return localQuizzes ? JSON.parse(localQuizzes) : {}
}