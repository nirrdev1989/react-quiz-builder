export function saveLoaclStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorage(key: string) {
    const localQuizzes = localStorage.getItem(key)
    return localQuizzes ? JSON.parse(localQuizzes) : {}
}