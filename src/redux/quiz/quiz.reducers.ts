import { Quiz, QuizResults, Quizzes } from "./model";
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
    ADD_UNSWER
} from "./quiz.actions.types";


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
        case EDIT_QUIZ_MAIN:
            const { propery, value, quizId } = action.payload
            const quizFound = state[quizId].quiz
            quizFound[propery] = value

            // console.log(quizFound)

            const newStateAfterUpdateMain = {
                ...state,
                [quizId]: {
                    quiz: quizFound
                }
            }

            return newStateAfterUpdateMain
        case REMOVE_QESTION:
            let currentQuizRemoveQestion = findQuiz(state, action.payload.quizId)
            const filtredQestions = currentQuizRemoveQestion.qestions.filter((qestion) => {
                return qestion.qestionId !== action.payload.qestionId
            })

            currentQuizRemoveQestion.qestions = [...filtredQestions]
            currentQuizRemoveQestion.numberQestions -= 1

            const newSateAfterRemoveQestion = {
                ...state,
                [action.payload.quizId]: {
                    quiz: { ...currentQuizRemoveQestion }
                }
            }

            saveLoaclStorage('quizzes', newSateAfterRemoveQestion)

            return newSateAfterRemoveQestion
        case ADD_QESTION:
            let currentQuizAddQestion = findQuiz(state, action.payload.quizId)

            currentQuizAddQestion.qestions = [...currentQuizAddQestion.qestions, action.payload.qestion]
            currentQuizAddQestion.numberQestions += 1

            const newSateAfterAddQestion = {
                ...state,
                [action.payload.quizId]: {
                    quiz: { ...currentQuizAddQestion }
                }
            }

            saveLoaclStorage('quizzes', newSateAfterAddQestion)


            return newSateAfterAddQestion

        case REMOVE_UNSWER:
            let currentQuizRemoveUnswer = findQuiz(state, action.payload.quizId)

            let findQestionIndexForRemoveUnswer = currentQuizRemoveUnswer.qestions.findIndex((qestion) => {
                return qestion.qestionId === action.payload.qestionId
            })

            let qestionsLess = [...currentQuizRemoveUnswer.qestions]

            qestionsLess[findQestionIndexForRemoveUnswer].unswers.splice(action.payload.index, 1)

            qestionsLess[findQestionIndexForRemoveUnswer].numberOfUnswers -= 1

            currentQuizRemoveUnswer.qestions = [...qestionsLess]

            const newStateAfterRemoveUnswer = {
                ...state,
                [action.payload.quizId]: {
                    quiz: { ...currentQuizRemoveUnswer }
                }
            }

            saveLoaclStorage('quizzes', newStateAfterRemoveUnswer)

            return newStateAfterRemoveUnswer
        case ADD_UNSWER:
            let currentQuizAddUnswer = findQuiz(state, action.payload.quizId)

            let findQestionIndexForAddUnswer = currentQuizAddUnswer.qestions.findIndex((qestion) => {
                return qestion.qestionId === action.payload.qestionId
            })

            let qestionsGrow = [...currentQuizAddUnswer.qestions]

            qestionsGrow[findQestionIndexForAddUnswer].unswers =
                [...qestionsGrow[findQestionIndexForAddUnswer].unswers, action.payload.unswer]

            qestionsGrow[findQestionIndexForAddUnswer].numberOfUnswers += 1

            currentQuizAddUnswer.qestions = [...qestionsGrow]

            const newStateAfterAddUnswer = {
                ...state,
                [action.payload.quizId]: {
                    quiz: { ...currentQuizAddUnswer }
                }
            }

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


function findQuiz(quizzesObj: Quizzes, quizId: string): Quiz {
    return quizzesObj[quizId].quiz
}


function saveLoaclStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key: string) {
    const localQuizzes = localStorage.getItem(key)
    return localQuizzes ? JSON.parse(localQuizzes) : {}
}