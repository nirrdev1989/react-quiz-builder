import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Qestion, Quiz } from '../../redux/quiz/model';
import { connect } from "react-redux";
import { addQuizAction } from '../../redux/quiz/quiz.action';
import AddQestionForm from '../Add-qestion-form/Add.qestion.form';

interface CreateQuizProps {
   addQuiz: (quiz: Quiz) => void
}

function CreateQuiz({ addQuiz }: CreateQuizProps) {

   const [createQuiz, setQuiz] = useState<Quiz>({
      title: '',
      description: '',
      numberQestions: 0,
      qestions: [],
   })

   const [isAddQestion, setIsAddQwestion] = useState<boolean>(false)


   function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
      const { name, value } = event.target
      setQuiz((prev) => {
         return {
            ...prev,
            [name]: value
         }
      })
   }


   function addQestion(qestion: Qestion) {
      setQuiz((prev) => {
         return {
            ...prev,
            numberQestions: prev.numberQestions + 1,
            qestions: [...prev.qestions, qestion]
         }
      })

      setIsAddQwestion(!isAddQestion)
   }


   function handleSubmit(event: FormEvent) {
      event.preventDefault()

      if (createQuiz.numberQestions === 0) {
         return alert('מספר השאלות חייב להיות יותר מ1')
      }
      alert('CREAT QUIZ')
      // console.log(createQuiz)
      addQuiz(createQuiz)

      resetQuiz()
   }


   function resetQuiz() {
      setQuiz({
         title: '',
         description: '',
         numberQestions: 0,
         qestions: []
      })
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div className="input-ele">
               <h6>Create your quiz /
                  <small style={{ fontSize: '12px' }}>
                     Qestions <span className="badge bg-success"> {createQuiz.numberQestions}</span>
                  </small>
                  <button
                     style={{ float: 'right' }}
                     className="btn btn-primary btn-sm"
                     type="submit"
                  >
                     Create quiz
               </button>
               </h6>
               <hr />
            </div>
            <div className="input-ele">
               <div className="form-floating mb-3">
                  <input
                     name="title"
                     type="text"
                     className="form-control"
                     placeholder="Title*"
                     required
                     value={createQuiz.title}
                     onChange={handleChange}
                  />
                  <label >Title*</label>
               </div>
            </div>
            <div className="input-ele">
               <div className="form-floating mb-3">
                  <textarea
                     style={{ height: "150px" }}
                     rows={5}
                     cols={5}
                     required
                     name="description"
                     value={createQuiz.description}
                     className="form-control"
                     placeholder="Description*"
                     onChange={handleChange}
                  />
                  <label >Description*</label>
               </div>
            </div>
         </form>
         {
            isAddQestion ?
               (
                  <AddQestionForm
                     closeAddQestionForm={() => setIsAddQwestion(!isAddQestion)}
                     addQestion={addQestion}
                  />
               ) : (
                  <div className="input-ele">
                     <span>Add qestion</span>
                           &nbsp;
                     <button
                        onClick={() => setIsAddQwestion(!isAddQestion)}
                        className="btn btn-dark btn-sm plus-btn"
                     >
                        +
                     </button>
                  </div>
               )
         }
      </>
   )

}


function mapDispatchToProps(dispatch: Function) {
   return {
      addQuiz: (quiz: Quiz) => dispatch(addQuizAction(quiz))
   }
}

export default connect(null, mapDispatchToProps)(CreateQuiz) 