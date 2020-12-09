import { Quiz } from "./model";
import { ADD_QUIZ, QuizActions, REMOVE_QUIZ } from "./quiz.actions.types";


export function addQuizAction(quiz: Quiz): QuizActions {
    return {
        type: ADD_QUIZ,
        payload: quiz
    }
}

export function removeQuiz(quizId: string): QuizActions {
    return {
        type: REMOVE_QUIZ,
        payload: quizId
    }
}