import { Quiz, QuizResultsUnswer } from "./model";
import {
    AddQuizActionType,
    ADD_QUIZ,
    RemoveQuizActionType,
    REMOVE_QUIZ,
    SetCurrentQuizActionType,
    SetUnswerActionType,
    SET_CURRENT_QUIZ,
    SET_UNSWER
} from "./quiz.actions.types";


export function addQuizAction(quiz: Quiz): AddQuizActionType {
    return {
        type: ADD_QUIZ,
        payload: quiz
    }
}

export function removeQuizAction(quizId: string): RemoveQuizActionType {
    return {
        type: REMOVE_QUIZ,
        payload: quizId
    }
}

export function setCurrentQuizAction(quizId: string): SetCurrentQuizActionType {
    return {
        type: SET_CURRENT_QUIZ,
        payload: quizId
    }
}

export function setUnswerAction(unswerResult: QuizResultsUnswer): SetUnswerActionType {
    return {
        type: SET_UNSWER,
        payload: unswerResult
    }
}