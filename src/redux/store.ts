import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { quizReducer, quizResultsReducer } from "./quiz/quiz.reducers";
// import {logger} from 'redux-logger'
import logger from 'redux-logger'

const middleweres = [logger]

const rootReducer = combineReducers({
    quizzes: quizReducer,
    currentQuiz: quizResultsReducer,
    // quizzesMain: quizzesReducer
})

export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, applyMiddleware(...middleweres))


// const quiz = {
//     title: 'a',
//     description: 'this quiz about a',
//     numberQestions: 2,
//     qestions: {
//         '249863': {
//             qestion: 'what do u like eat',
//             numberOfUnswers: 3,
//             unswers: ['banana', 'apple', 'watermelon']
//         },
//         '48263492863': {
//             qestion: 'what do u drink eat',
//             numberOfUnswers: 4,
//             unswers: ['cola', 'sprite', 'water', 'fanta']
//         }
//     }
// }

// console.log(Object.values(quiz.qestions))
// console.log(quiz.qestions['249863'])