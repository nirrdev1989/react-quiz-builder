import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Quiz } from '../../redux/quiz/model';
import { connect } from "react-redux";
import { addQuizAction } from '../../redux/quiz/quiz.action';
import { withRouter } from 'react-router';

interface CreateQuizProps {
   addQuiz: (quiz: Quiz) => void
}

function CreateMainQuiz({ addQuiz }: CreateQuizProps) {

   const [createQuiz, setQuiz] = useState<Quiz>({
      title: '',
      description: '',
      numberQestions: 0,
      qestions: [],
   })


   function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
      const { name, value } = event.target
      setQuiz((prev) => {
         return {
            ...prev,
            [name]: value
         }
      })
   }


   function handleSubmit(event: FormEvent) {
      event.preventDefault()

      alert('CREAT QUIZ')
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
               <h6>Create your quiz
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
      </>
   )

}


function mapDispatchToProps(dispatch: Function) {
   return {
      addQuiz: (quiz: Quiz) => dispatch(addQuizAction(quiz))
   }
}

export default withRouter(
   connect(null, mapDispatchToProps)(CreateMainQuiz)
) 