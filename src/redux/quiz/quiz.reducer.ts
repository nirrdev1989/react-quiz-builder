import { Quizzes } from "./model";
import { ADD_QUIZ, QuizActions } from "./quiz.actions.types";


type QuizzesState = Quizzes


const INITIAL_STATE: QuizzesState = getLocalStorage('quizzes')


export default function quizReducer(state = INITIAL_STATE, action: QuizActions): QuizzesState {
    switch (action.type) {
        case ADD_QUIZ:
            const newState = {
                ...state,
                [String(Date.now())]: {
                    quiz: action.payload
                }
            }

            saveLoaclStorage('quizzes', newState)

            return newState
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