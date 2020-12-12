import { AddQuestion, AddAnswer, EditQuestion, Quiz, QuizEditMain, QuizResultsAnswer, RemoveQuestion, RemoveAnswer } from "./model";
import {
    AddQuizActionType,
    ADD_QUIZ,
    RemoveQuizActionType,
    REMOVE_QUIZ,
    SetCurrentQuizActionType,
    SetAnswerActionType,
    SET_CURRENT_QUIZ,
    SET_UNSWER,
    EDIT_QUIZ_MAIN,
    EditQuizMainActionType,
    RemoveQuestionActionType,
    REMOVE_Question,
    AddQuestionActionType,
    ADD_Question,
    RemoveAnswerActionType,
    REMOVE_UNSWER,
    AddAnswerActionType,
    ADD_UNSWER,
    EditQuestionActionType,
    EDIT_Question
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

export function removeQuestionAction(questionId: RemoveQuestion): RemoveQuestionActionType {
    return {
        type: REMOVE_Question,
        payload: questionId
    }
}

export function addQuestionAction(info: AddQuestion): AddQuestionActionType {
    return {
        type: ADD_Question,
        payload: info
    }
}

export function setAnswerAction(answerResult: QuizResultsAnswer): SetAnswerActionType {
    return {
        type: SET_UNSWER,
        payload: answerResult
    }
}

export function editQuizMainAction(info: QuizEditMain): EditQuizMainActionType {
    return {
        type: EDIT_QUIZ_MAIN,
        payload: info
    }
}

export function removeAnswerAction(info: RemoveAnswer): RemoveAnswerActionType {
    return {
        type: REMOVE_UNSWER,
        payload: info
    }
}

export function addAnswerAction(info: AddAnswer): AddAnswerActionType {
    return {
        type: ADD_UNSWER,
        payload: info
    }
}

export function editQuestionAction(info: EditQuestion): EditQuestionActionType {
    return {
        type: EDIT_Question,
        payload: info
    }
}



