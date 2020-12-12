import { AddQestion, AddUnswer, EditQestion, Quiz, QuizEditMain, QuizResultsUnswer, RemoveQestion, RemoveUnswer } from "./model";
import {
    AddQuizActionType,
    ADD_QUIZ,
    RemoveQuizActionType,
    REMOVE_QUIZ,
    SetCurrentQuizActionType,
    SetUnswerActionType,
    SET_CURRENT_QUIZ,
    SET_UNSWER,
    EDIT_QUIZ_MAIN,
    EditQuizMainActionType,
    RemoveQestionActionType,
    REMOVE_QESTION,
    AddQestionActionType,
    ADD_QESTION,
    RemoveUnswerActionType,
    REMOVE_UNSWER,
    AddUnswerActionType,
    ADD_UNSWER,
    EditQestionActionType,
    EDIT_QESTION
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

export function removeQestionAction(qestionId: RemoveQestion): RemoveQestionActionType {
    return {
        type: REMOVE_QESTION,
        payload: qestionId
    }
}

export function addQestionAction(info: AddQestion): AddQestionActionType {
    return {
        type: ADD_QESTION,
        payload: info
    }
}

export function setUnswerAction(unswerResult: QuizResultsUnswer): SetUnswerActionType {
    return {
        type: SET_UNSWER,
        payload: unswerResult
    }
}

export function editQuizMainAction(info: QuizEditMain): EditQuizMainActionType {
    return {
        type: EDIT_QUIZ_MAIN,
        payload: info
    }
}

export function removeUnswerAction(info: RemoveUnswer): RemoveUnswerActionType {
    return {
        type: REMOVE_UNSWER,
        payload: info
    }
}

export function addUnswerAction(info: AddUnswer): AddUnswerActionType {
    return {
        type: ADD_UNSWER,
        payload: info
    }
}

export function editQestionAction(info: EditQestion): EditQestionActionType {
    return {
        type: EDIT_QESTION,
        payload: info
    }
}



