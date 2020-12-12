export interface Question {
    questionId: string
    question: string
    numberOfAnswers: number
    answers: string[]
}

export interface Answer {
    answerId: string
    answer: string
}

export interface Quiz {
    quizId: string
    title: string,
    description: string,
    numberQuestions: number,
    questions: Question[]
}

export interface Quizzes {
    [key: string]: {
        quiz: Quiz
    }
}

export interface QuizResults {
    quizId: string
    answers: QuizResultsAnswer[]
}

export interface QuizResultsAnswer {
    question: string
    choosenAnswer: string
}

type propertiesQuizEditMain = 'title' | 'description'

export interface QuizEditMain {
    quizId: string
    propery: propertiesQuizEditMain
    value: string
}

export interface RemoveQuestion {
    questionId: string
    quizId: string
}

export interface AddQuestion {
    quizId: string
    question: Question
}

export interface RemoveAnswer {
    quizId: string
    questionId: string
    index: number
}

export interface AddAnswer {
    quizId: string
    questionId: string
    value: string
}

export interface EditQuestion {
    questionId: string
    quizId: string
    value: string
}
