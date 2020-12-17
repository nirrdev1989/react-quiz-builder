import React from 'react'
import { firstChartToUpperCase } from '../../utils/first.chart.uppercase'




interface QuizMainItemProps {
    value: string
    property: string
}

export function QuizMainItem({ property, value }: QuizMainItemProps) {
    return <React.Fragment>
        <strong>{firstChartToUpperCase(property)}:</strong> <span>{value}</span>
    </React.Fragment>
}




