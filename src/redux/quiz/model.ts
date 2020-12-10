export interface Qestion {
    qestionId: string
    qestion: string
    numberOfUnswers: number
    unswers: string[]
}

export interface Quiz {
    title: string,
    description: string,
    numberQestions: number,
    qestions: Qestion[]
}

export interface Quizzes {
    [key: string]: {
        quiz: Quiz
    }
}

export interface QuizResults {
    quizId: string
    unswers: QuizResultsUnswer[]
}

export interface QuizResultsUnswer {
    qestion: string
    choosenUnswer: string
}

type propertiesQuizEditMain = 'title' | 'description'

export interface QuizEditMain {
    quizId: string
    propery: propertiesQuizEditMain
    value: string
}

export interface RemoveQestion {
    qestionId: string
    quizId: string
}

export interface AddQestion {
    quizId: string
    qestion: Qestion
}

