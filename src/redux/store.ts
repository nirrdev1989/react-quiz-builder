import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { quizReducer, quizResultsReducer } from "./quiz/quiz.reducers";
import { toggleReducer } from './toggler/toggle.reducer'
import logger from 'redux-logger'

const middleweres = [logger]

const rootReducer = combineReducers({
    quizzes: quizReducer,
    currentQuiz: quizResultsReducer,
    // toggle: toggleReducer
    // quizzesMain: quizzesReducer
})

export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, applyMiddleware(...middleweres))


// const quiz = {
//     title: 'a',
//     description: 'this quiz about a',
//     numberQuestions: 2,
//     questions: {
//         '249863': {
//             question: 'what do u like eat',
//             numberOfAnswers: 3,
//             answers: ['banana', 'apple', 'watermelon']
//         },
//         '48263492863': {
//             question: 'what do u drink eat',
//             numberOfAnswers: 4,
//             answers: ['cola', 'sprite', 'water', 'fanta']
//         }
//     }
// }

// console.log(Object.values(quiz.questions))
// console.log(quiz.questions['249863'])