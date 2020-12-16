import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Quiz } from '../../redux/quiz/model';
import { connect } from "react-redux";
import { addQuizAction } from '../../redux/quiz/quiz.action';
import { withRouter } from 'react-router';
import AlertWindow from '../Alert-window/Alert.window';
import { Link } from 'react-router-dom';
import CardContainer from '../Card-container/Card.container'
import { ToggleElemetAction } from '../../redux/toggler/toggler.actions';
// import { RootState } from '../../redux/store';


interface CreateQuizProps {
   addQuiz: (quiz: Quiz) => void
   // toggleElement: () => void
}

function CreateMainQuiz({ addQuiz }: CreateQuizProps) {



   const [quizIsCreated, setQuizIsCreated] = useState<boolean>(false)

   const [createQuiz, setQuiz] = useState<Quiz>({
      dateCreated: new Date().toLocaleDateString(),
      published: false,
      quizId: String(Date.now()),
      title: '',
      description: '',
      numberQuestions: 0,
      questions: [],
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
      addQuiz(createQuiz)
      setQuizIsCreated(!quizIsCreated)
   }

   return (
      <React.Fragment>
         {quizIsCreated ?
            (<AlertWindow color="warning">
               <strong>Your quiz was created click,</strong>
               <Link
                  to={`quiz/edit/${createQuiz.quizId}`}
                  onClick={() => setQuizIsCreated(!quizIsCreated)}>
                  <span className="text-primary"> here </span>
               </Link>
               <strong>to edit</strong>
            </AlertWindow>) : (
               <CardContainer>
                  <form onSubmit={handleSubmit}>
                     <span>
                        <strong>Create your quiz</strong>
                        <button
                           style={{ float: 'right' }}
                           className="btn  btn-sm btn-blue"
                           type="submit">
                           Create quiz
                     </button>
                     </span>
                     <hr />
                     <div className="form-floating mb-3">
                        <input
                           name="title"
                           type="text"
                           className="form-control"
                           placeholder="Title*"
                           required
                           value={createQuiz.title}
                           onChange={handleChange} />
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
                           onChange={handleChange} />
                        <label >Description*</label>
                     </div>
                  </form>
               </CardContainer>
            )}
      </React.Fragment>
   )
}


function mapDispatchToProps(dispatch: Function) {
   return {
      addQuiz: (quiz: Quiz) => dispatch(addQuizAction(quiz)),
      // toggleElement: () => dispatch(ToggleElemetAction())
   }
}

export default withRouter(
   connect(null, mapDispatchToProps)(CreateMainQuiz)
) 