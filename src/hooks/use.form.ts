import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { FormErros } from '../form-validators/validators'
// import { AddAnswer, AddQuestion, Quiz } from '../redux/quiz/model'
// type FormsInitStateTypes = Quiz | AddAnswer | AddQuestion

export function useForm(initialState: any, callSubmit: Function, validate: Function) {

    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const [values, setValues] = useState<any>(initialState)

    const [errors, setErrors] = useState<FormErros>(initialState)


    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = event.target

        setValues((prev: any) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setErrors(() => validate(values))
        setIsSubmit(() => true)
    }


    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            callSubmit()
        }
    }, [errors])


    function resetForm() {
        setValues(() => initialState)
    }


    return [values, handleChange, handleSubmit, isSubmit, errors]
}