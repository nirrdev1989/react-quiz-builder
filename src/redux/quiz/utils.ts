import { Quiz, QuizResults, Quizzes } from "./model"
import { AddQestionActionType, AddQuizActionType, AddUnswerActionType, RemoveQestionActionType, RemoveQuizActionType, RemoveUnswerActionType, SetCurrentQuizActionType, SetUnswerActionType } from "./quiz.actions.types"
import { QuizzesState } from "./quiz.reducers"

export function findQuiz(quizzesObj: Quizzes, quizId: string): Quiz {
    return quizzesObj[quizId].quiz
}


export function removeQestionUtil(currentState: QuizzesState, action: RemoveQestionActionType) {
    const { quizId, qestionId } = action.payload
    const quiz = findQuiz(currentState, quizId)

    const filtredQestions = quiz.qestions.filter((qestion) => qestion.qestionId !== qestionId)

    quiz.qestions = filtredQestions
    quiz.numberQestions -= 1

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }

}

export function addQestionUtil(currentState: QuizzesState, action: AddQestionActionType) {
    const { quizId, qestion } = action.payload
    const quiz = findQuiz(currentState, quizId)

    quiz.qestions = [...quiz.qestions, qestion]
    quiz.numberQestions += 1

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }
}

export function removeUnswerUtil(currentState: QuizzesState, action: RemoveUnswerActionType) {
    const { quizId, qestionId, index } = action.payload
    const quiz = findQuiz(currentState, quizId)

    const qestionIndex = quiz.qestions.findIndex((qestion) => qestion.qestionId === qestionId)

    const qestionsLess = [...quiz.qestions]

    qestionsLess[qestionIndex].unswers.splice(index, 1)

    qestionsLess[qestionIndex].numberOfUnswers -= 1

    quiz.qestions = qestionsLess

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }
}

export function addUnswerUtil(currentState: QuizzesState, action: AddUnswerActionType) {
    const { quizId, unswer, qestionId } = action.payload
    const quiz = findQuiz(currentState, quizId)

    const qestionIndex = quiz.qestions.findIndex((qestion) => {
        return qestion.qestionId === qestionId
    })

    const qestionsNew = [...quiz.qestions]

    qestionsNew[qestionIndex].unswers =
        [...qestionsNew[qestionIndex].unswers, unswer]

    qestionsNew[qestionIndex].numberOfUnswers += 1

    quiz.qestions = qestionsNew

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }
}

export function createQuizUtil(currentState: QuizzesState, action: AddQuizActionType) {
    return {
        ...currentState,
        [String(Date.now())]: {
            quiz: action.payload
        }
    }
}

export function removeQuizUtil(currentState: QuizzesState, action: RemoveQuizActionType) {
    delete currentState[action.payload]
    return {
        ...currentState
    }
}

export function updateState(
    currentState: QuizzesState,
    quizId: string,
    newQuizSate: Quiz): QuizzesState {
    return {
        ...currentState,
        [quizId]: {
            quiz: newQuizSate
        }
    }
}


// ******************************************************************************************************************
// RESULTS UTILS

export function setCurrentQuizUtil(currentState: QuizResults, action: SetCurrentQuizActionType) {
    return {
        ...currentState,
        quizId: action.payload,
        unswers: []
    }
}

export function setUnswerUtil(currentState: QuizResults, action: SetUnswerActionType) {
    let newUnswersState = [...currentState.unswers]
    const index = currentState.unswers.findIndex((unswer) => unswer.qestion === action.payload.qestion)

    if (index !== -1) {
        newUnswersState[index] = action.payload
    } else {
        newUnswersState = [...newUnswersState, action.payload]
    }

    return {
        ...currentState,
        unswers: newUnswersState
    }
}
