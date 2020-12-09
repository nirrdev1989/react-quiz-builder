export interface Qestion {
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