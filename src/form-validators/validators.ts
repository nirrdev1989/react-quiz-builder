import { Quiz } from "../redux/quiz/model"

export interface FormErros {
    [key: string]: {
        validatorName: string
        message: string
        label: string
    }
}

export function createQuizMainValidate(values: Quiz) {
    let erros: FormErros = {}

    if (required(values!.title)) {
        erros['title'] = {
            label: 'Tilt',
            validatorName: 'required',
            message: 'Ttile is required'
        }
    }

    else if (maxLength(values!.title, 25)) {
        erros['title'] = {
            label: 'Tilt',
            validatorName: 'maxLength',
            message: 'Ttile is to long'
        }
    }

    if (required(values!.description)) {
        erros['description'] = {
            label: 'Description',
            validatorName: 'required',
            message: 'Description is required'
        }
    }

    else if (maxLength(values!.description, 100)) {
        erros['description'] = {
            label: 'Description',
            validatorName: 'maxLength',
            message: 'Description is to long'
        }
    }

    // if (required(values!.password)) {
    //     erros['password'] = {
    //         label: 'Password',
    //         validatorName: 'required',
    //         message: 'Password is required'
    //     }
    // }

    // else if (minLength(values!.password, 3)) {
    //     erros['password'] = {
    //         label: 'Password',
    //         validatorName: 'minLength',
    //         message: 'Password too short'
    //     }
    // }

    // else if (maxLength(values!.password, 10)) {
    //     erros['password'] = {
    //         label: 'Password',
    //         validatorName: 'maxLength',
    //         message: 'Password too long'
    //     }
    // }

    // if (required(values!.ownerEmail)) {
    //     erros['ownerEmail'] = {
    //         label: 'Owner email',
    //         validatorName: 'required',
    //         message: 'Owner Email is required'
    //     }
    // }

    // else if (maxLength(values!.ownerEmail, 50)) {
    //     erros['ownerEmail'] = {
    //         label: 'Owner email',
    //         validatorName: 'maxLength',
    //         message: 'Email is to long'
    //     }
    // }

    // else if (email(values!.ownerEmail)) {
    //     erros['ownerEmail'] = {
    //         label: 'Owner email',
    //         validatorName: 'email',
    //         message: 'Invalid email'
    //     }
    // }

    // if (required(values!.ownerName)) {
    //     erros['ownerName'] = {
    //         label: 'Owner Name',
    //         validatorName: 'required',
    //         message: 'Owner Name is required'
    //     }
    // }

    // else if (maxLength(values!.ownerName, 20)) {
    //     erros['ownerName'] = {
    //         label: 'Owner name',
    //         validatorName: 'maxLength',
    //         message: 'Owner name is to long'
    //     }
    // }
    console.log(erros)

    return erros
}


export function required(value: string): boolean {
    return value === '' || value === undefined
}

export function email(value: string): boolean {
    let pattern = /\S+@\S+\.\S+/
    return !pattern.test(value)
}

export function minLength(value: string, limit: number): boolean {
    return value.length < limit
}

export function maxLength(value: string, limit: number): boolean {
    return value.length > limit
}