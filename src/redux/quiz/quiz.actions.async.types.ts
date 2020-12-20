
export const PUBLISH_QUIZ_START = 'PUBLISH_QUIZ_START'
export const PUBLISH_QUIZ_SUCCESS = 'PUBLISH_QUIZ_SUCCESS'
export const PUBLISH_QUIZ_FAIL = 'PUBLISH_QUIZ_FAIL'


export interface PublishQuizStartActionType {
    type: typeof PUBLISH_QUIZ_START
}

export interface PublishQuizSuccessActionType {
    type: typeof PUBLISH_QUIZ_SUCCESS,
}

export interface PublishQuizFailActionType {
    type: typeof PUBLISH_QUIZ_FAIL,
    payload: string
}


export type QuizAsyncActionsTypes =
    PublishQuizStartActionType |
    PublishQuizSuccessActionType |
    PublishQuizFailActionType
