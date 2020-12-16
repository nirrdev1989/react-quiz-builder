import {
    AddQuestion,
    AddAnswer,
    EditQuestion,
    Quiz,
    QuizEditMain,
    QuizResultsAnswer,
    RemoveQuestion,
    RemoveAnswer
} from "./model";
import {
    AddQuizActionType,
    RemoveQuizActionType,
    SetCurrentQuizActionType,
    SetAnswerActionType,
    EditQuizMainActionType,
    RemoveQuestionActionType,
    AddQuestionActionType,
    RemoveAnswerActionType,
    AddAnswerActionType,
    EditQuestionActionType,
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
        type: REMOVE_QUESTION,
        payload: questionId
    }
}

export function addQuestionAction(info: AddQuestion): AddQuestionActionType {
    return {
        type: ADD_QUESTION,
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
        type: EDIT_QUESTION,
        payload: info
    }
}



