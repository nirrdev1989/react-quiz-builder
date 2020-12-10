import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { quizReducer, quizResultsReducer } from "./quiz/quiz.reducers";
// import {logger} from 'redux-logger'
import logger from 'redux-logger'

const middleweres = [logger]

const rootReducer = combineReducers({
    quizzes: quizReducer,
    currentQuiz: quizResultsReducer
})

export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, applyMiddleware(...middleweres))


// const quiz: Quiz = {
//     title: 'a',
//     description: 'this quiz about a',
//     numberQestions: 2,
//     qestions: [
//        {
//           qestion: 'what do u like eat',
//           numberOfUnswers: 3,
//           unswers: ['banana', 'apple', 'watermelon']
//        },
//        {
//           qestion: 'what do u drink eat',
//           numberOfUnswers: 4,
//           unswers: ['cola', 'sprite', 'water', 'fanta']
//        }
//     ]
//  }
// const initSate = {
//     '312312312': quiz,
//     '31231312': quiz2,
//     '3123112': quiz3,
// }
