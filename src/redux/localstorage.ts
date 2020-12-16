export function saveSessionStorage(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value))
}

export function getSessionStorage(key: string) {
    const localQuizzes = sessionStorage.getItem(key)
    return localQuizzes ? JSON.parse(localQuizzes) : {}
}




