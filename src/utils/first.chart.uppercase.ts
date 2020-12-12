export function firstChartToUpperCase(str: string): string {
    const first = str[0]

    return first.toUpperCase() + str.slice(1, str.length)
}