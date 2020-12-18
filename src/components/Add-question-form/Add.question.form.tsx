import React, { ChangeEvent, FormEvent, useState } from 'react'
// import { useForm } from '../../hooks/use.form'
import { Question } from '../../redux/quiz/model'
import FormInput from '../Form-input/Form.input'
import SmallMessage from '../Small-massage/Small.message'


interface AddQuestionFormProps {
   addQuestion: (info: Question) => void
   closeAddQuestionForm: () => void
}

function AddQuestionForm({ addQuestion, closeAddQuestionForm }: AddQuestionFormProps) {

   const [question, setQuestion] = useState<Question>({
      questionId: '',
      question: '',
      numberOfAnswers: 0,
      answers: []
   })


   function handleQuestionChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target

      if (name === 'numberOfAnswers') {
         if (Number(value) > 6) {
            return alert('6 תשובות מקסימום')
         }
      }

      setQuestion((prev) => {
         return {
            ...prev,
            questionId: String(Date.now()),
            [name]: name === 'numberOfAnswers' ? Number(value) : value
         }
      })
   }

   function handleAnswersChnage(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target

      const answers = [...question.answers]
      answers[Number(name)] = value

      setQuestion((prev) => {
         return {
            ...prev,
            answers: answers
         }
      })
   }


   function handleSubmit(event: FormEvent) {
      event.preventDefault()

      if (question.question === '' || question.numberOfAnswers < 2 || question.answers.length < 2) {
         return alert('מספר התשובות חייב להיות יותר מ1 ')
      }

      addQuestion(question)
      resetQuestion()
   }


   function resetQuestion() {
      setQuestion({
         questionId: '',
         numberOfAnswers: 0,
         question: '',
         answers: []
      })
   }

   return (
      <React.Fragment>
         <form onSubmit={handleSubmit} >
            <SmallMessage
               message={'Question'}
               color="black"
            />
            <FormInput value={question.question}
               className="form-control"
               type="text"
               name="question"
               required
               maxLength={100}
               label={'Question*'}
               placeholder="Question"
               onChange={handleQuestionChange} />
            <SmallMessage
               message={'Number of answers'}
               color="black"
            />
            <input
               id="count-answers"
               value={question.numberOfAnswers}
               type="number"
               required
               min="1"
               max="6"
               name="numberOfAnswers"
               className="form-control"
               placeholder="Number of answers"
               onChange={handleQuestionChange}
            />
            <br />
            {Array.from({ length: question.numberOfAnswers }).map((_, index) => {
               return <div key={index + 10}>
                  <SmallMessage
                     color="black"
                     message={`Answer: ${index + 1}`}
                  />
                  <input
                     name={`${index}`}
                     type="text"
                     required
                     maxLength={100}
                     className="form-control form-control-sm mb-2"
                     placeholder={`Answer: ${index + 1}`}
                     onChange={handleAnswersChnage}
                  />
               </div>
            })}
            <button
               type="submit"
               className="btn btn-blue btn-sm">
               Save
            </button>
                 &nbsp;
            <button
               className="btn btn-pink btn-sm"
               onClick={() => {
                  // resetQuestion()
                  closeAddQuestionForm()
               }}>
               Cancel
            </button>
         </form>
      </React.Fragment>
   )
}


export default AddQuestionForm