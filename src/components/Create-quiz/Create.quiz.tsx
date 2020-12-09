import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Qestion, Quiz } from '../../redux/quiz/model';
// import uuid from 'react-uuid'
import { connect } from "react-redux";
import { addQuizAction } from '../../redux/quiz/quiz.action';

function CreateQuiz({ addQuizAction }: any) {

   const [createQuiz, setQuiz] = useState<Quiz>({
      title: '',
      description: '',
      numberQestions: 0,
      qestions: [],
   })


   const [qestion, setQestion] = useState<Qestion>({
      qestion: '',
      numberOfUnswers: 0,
      unswers: []
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

   function handleQestionChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target
      setQestion((prev) => {
         return {
            ...prev,
            [name]: name === 'numberOfUnswers' ? Number(value) : value
         }
      })
   }

   function handleUnswersChnage(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target

      if (!value) {
         return
      }

      const unswers = [...qestion.unswers]
      unswers[Number(name)] = value

      setQestion((prev) => {
         return {
            ...prev,
            unswers: unswers
         }
      })
   }


   function validate() { }


   function addQestion() {

      if (qestion.qestion === '' || qestion.numberOfUnswers === 0 || qestion.unswers.length === 0) {
         return
      }

      console.log(qestion.unswers)

      setQuiz((prev) => {
         return {
            ...prev,
            numberQestions: prev.numberQestions + 1,
            qestions: [...prev.qestions, qestion]
         }
      })

      setIsAddQwestion(!isAddQestion)

      resetQestion()
   }


   function handleSubmit(event: FormEvent) {
      event.preventDefault()
      alert('CREAT QUIZ')

      // console.log(createQuiz)
      addQuizAction(createQuiz)

      resetQuiz()
   }


   function resetQestion() {
      setQestion({
         numberOfUnswers: 0,
         qestion: '',
         unswers: []
      })
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
         <h3 className="text-center">Create your quiz</h3>
         <form onSubmit={handleSubmit}>
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
            {
               isAddQestion ?
                  (
                     <div>
                        <div className="input-ele">
                           <div className="form-floating mb-3">
                              <input
                                 value={qestion.qestion}
                                 className="form-control"
                                 type="text"
                                 name="qestion"
                                 required
                                 placeholder="Qestion"
                                 onChange={handleQestionChange}
                              />
                              <label >Qestion*</label>
                           </div>
                        </div>
                        <div className="input-ele">
                           <label>Number of unswers</label>
                           <input
                              id="count-unswers"
                              value={qestion.numberOfUnswers}
                              type="number"
                              required
                              min="1"
                              max="6"
                              name="numberOfUnswers"
                              className="form-control"
                              placeholder="Number of unswers"
                              onChange={handleQestionChange}
                           />
                        </div>
                        {
                           Array.from({ length: qestion.numberOfUnswers }).map((_, index) => {
                              return <div className="input-ele" key={index}>
                                 <input
                                    name={`${index}`}
                                    value={qestion.unswers[index]}
                                    type="text"
                                    required
                                    className="form-control"
                                    placeholder={`Unswer: ${index + 1}`}
                                    onChange={handleUnswersChnage}
                                 />
                              </div>
                           })
                        }
                        <div className="input-ele">
                           <button
                              onClick={addQestion}
                              className="btn btn-primary btn-sm"
                           >
                              Add qestion
                          </button>
                           &nbsp;
                           <button
                              className="btn btn-danger btn-sm"
                              onClick={() => {
                                 setIsAddQwestion(!isAddQestion)
                                 resetQestion()
                              }}
                           >
                              Cencel
                           </button>
                        </div>
                     </div>
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
            <div className="input-ele">
               <hr />
               <button
                  className="btn btn-primary btn-sm"
                  type="submit"
               >
                  Create quiz
               </button>
            </div>
         </form>
      </>
   )

}


function mapDispatchToProps(dispatch: Function) {
   return {
      addQuizAction: (quiz: Quiz) => dispatch(addQuizAction(quiz))
   }
}

export default connect(null, mapDispatchToProps)(CreateQuiz) 