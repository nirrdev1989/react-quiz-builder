import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Quiz } from '../../redux/quiz/model';
import { connect } from "react-redux";
import { addQuizAction } from '../../redux/quiz/quiz.action';
import { withRouter } from 'react-router';
import AlertWindow from '../Alert-window/Alert.window';
import { Link } from 'react-router-dom';

interface CreateQuizProps {
   addQuiz: (quiz: Quiz) => void
}

function CreateMainQuiz({ addQuiz }: CreateQuizProps) {

   const [quizIsCreated, setQuizIsCreated] = useState<boolean>(false)

   const [createQuiz, setQuiz] = useState<Quiz>({
      quizId: String(Date.now()),
      title: '',
      description: '',
      numberQestions: 0,
      qestions: [],
   })


   function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
      // console.log(createQuiz)
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
      // alert('CREAT QUIZ')
      addQuiz(createQuiz)
      setQuizIsCreated(true)
   }


   // function resetQuiz() {
   //    setQuiz({
   //       quizId: '',
   //       title: '',
   //       description: '',
   //       numberQestions: 0,
   //       qestions: []
   //    })
   // }

   return (
      <>
         {quizIsCreated ?
            (<AlertWindow color="warning">
               <strong>Your quiz was created click</strong>
               <Link
                  to={`quiz/edit/${createQuiz.quizId}`}
                  onClick={() => setQuizIsCreated(false)}
               >
                  <span> here </span>
               </Link>
               to edit
            </AlertWindow>) : (
               <form onSubmit={handleSubmit}>
                  <h6>Create your quiz
                  <button
                        style={{ float: 'right' }}
                        className="btn  btn-sm btn-blue"
                        type="submit"
                     >
                        Create quiz
                  </button>
                  </h6>
                  <hr />
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
               </form>
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

export default withRouter(
   connect(null, mapDispatchToProps)(CreateMainQuiz)
) 