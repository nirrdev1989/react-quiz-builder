import { Quiz, QuizEditMain, QuizResults, Quizzes } from "./model"
import {
    AddQuestionActionType,
    AddQuizActionType,
    AddAnswerActionType,
    EditQuestionActionType,
    EditQuizMainActionType,
    RemoveQuestionActionType,
    RemoveQuizActionType,
    RemoveAnswerActionType,
    SetCurrentQuizActionType,
    SetAnswerActionType
} from "./quiz.actions.types"
import { QuizzesState } from "./quiz.reducers"

export function findQuiz(quizzesObj: Quizzes, quizId: string): Quiz {
    return quizzesObj[quizId].quiz
}

export function removeQuestionUtil(currentState: QuizzesState, action: RemoveQuestionActionType) {
    const { quizId, questionId } = action.payload
    const quiz = findQuiz(currentState, quizId)

    const filtredQuestions = quiz.questions.filter((question) => question.questionId !== questionId)

    quiz.questions = filtredQuestions
    quiz.numberQuestions -= 1

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }

}

export function addQuestionUtil(currentState: QuizzesState, action: AddQuestionActionType) {
    const { quizId, question } = action.payload
    const quiz = findQuiz(currentState, quizId)

    quiz.questions = [...quiz.questions, question]
    quiz.numberQuestions += 1

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }
}

export function removeAnswerUtil(currentState: QuizzesState, action: RemoveAnswerActionType) {
    const { quizId, questionId, index } = action.payload
    const quiz = findQuiz(currentState, quizId)

    const questionIndex = quiz.questions.findIndex((question) => question.questionId === questionId)

    const questionsLess = [...quiz.questions]

    questionsLess[questionIndex].answers.splice(index, 1)

    questionsLess[questionIndex].numberOfAnswers -= 1

    quiz.questions = questionsLess

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }
}

export function addAnswerUtil(currentState: QuizzesState, action: AddAnswerActionType) {
    const { quizId, value, questionId } = action.payload
    const quiz = findQuiz(currentState, quizId)

    const questionIndex = quiz.questions.findIndex((question) => {
        return question.questionId === questionId
    })

    const questionsNew = [...quiz.questions]

    questionsNew[questionIndex].answers =
        [...questionsNew[questionIndex].answers, value]

    questionsNew[questionIndex].numberOfAnswers += 1

    quiz.questions = questionsNew

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }
}

export function editQuestionUtil(currentState: QuizzesState, action: EditQuestionActionType) {
    const { quizId, value, questionId } = action.payload
    const quiz = findQuiz(currentState, quizId)

    const questionIndex = quiz.questions.findIndex((question) => {
        return question.questionId === questionId
    })

    const questionsNew = [...quiz.questions]

    questionsNew[questionIndex].question = value

    quiz.questions = questionsNew

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }
}

export function createQuizUtil(currentState: QuizzesState, action: AddQuizActionType) {
    return {
        ...currentState,
        [action.payload.quizId]: {
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

export function editQuizMainUtil(currentState: QuizzesState, action: EditQuizMainActionType) {
    const { property, value, quizId } = action.payload

    const quiz = findQuiz(currentState, quizId)

    quiz[property] = value

    const newState = updateState(currentState, quizId, quiz)

    return { ...newState }
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
        answers: []
    }
}

export function setAnswerUtil(currentState: QuizResults, action: SetAnswerActionType) {
    let newAnswersState = [...currentState.answers]
    const index = currentState.answers.findIndex((answer) => answer.question === action.payload.question)

    if (index !== -1) {
        newAnswersState[index] = action.payload
    } else {
        newAnswersState = [...newAnswersState, action.payload]
    }

    return {
        ...currentState,
        answers: newAnswersState
    }
}
