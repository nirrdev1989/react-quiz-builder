import { Quiz } from "./model";
import { PublishQuizFailActionType, PublishQuizStartActionType, PublishQuizSuccessActionType, PUBLISH_QUIZ_FAIL, PUBLISH_QUIZ_START, PUBLISH_QUIZ_SUCCESS } from "./quiz.actions.async.types";
import AXIOS from 'axios'
import { publishQuiz } from "./quiz.action";

export function publishQuizStartAction(): PublishQuizStartActionType {
    return {
        type: PUBLISH_QUIZ_START
    }
}

export function publishQuizSuccessAction(): PublishQuizSuccessActionType {
    return {
        type: PUBLISH_QUIZ_SUCCESS,
    }
}

export function publishQuizFailAction(error: string): PublishQuizFailActionType {
    return {
        type: PUBLISH_QUIZ_FAIL,
        payload: error
    }
}


export function publishQuizAsync(quiz: Quiz) {
    return function (dispatch: Function) {
        dispatch(publishQuizStartAction())

        AXIOS.post('http://localhost:3344/api/quiz/publish', quiz, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(() => {
                dispatch(publishQuizSuccessAction())
                dispatch(publishQuiz(quiz.quizId))
            })
            .catch((error) => {
                console.log(error)
                dispatch(publishQuizFailAction(error.message))
            })

    }
}