import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Quiz } from '../../redux/quiz/model';
import { connect } from "react-redux";
import { addQuizAction } from '../../redux/quiz/quiz.action';
import { withRouter } from 'react-router';
import AlertWindow from '../Alert-window/Alert.window';
import { Link } from 'react-router-dom';
import CardContainer from '../Card-container/Card.container'
import SmallMessage from '../Small-massage/Small.message';
import FormInput from '../Form-input/Form.input';


interface CreateQuizProps {
   addQuiz: (quiz: Quiz) => void
}

function CreateMainQuizForm({ addQuiz }: CreateQuizProps) {

   const [quizIsCreated, setQuizIsCreated] = useState<boolean>(false)

   const [createQuiz, setQuiz] = useState<Quiz>({
      dateCreated: new Date().toLocaleDateString(),
      published: false,
      quizId: String(Date.now()),
      isValid: false,
      title: '',
      description: '',
      numberQuestions: 0,
      questions: [],
      password: '',
      ownerName: '',
      ownerEmail: ''
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
      switcAlertWindow()
   }


   function switcAlertWindow() {
      setQuizIsCreated(!quizIsCreated)

   }

   function resetCreatQuizMain() {
      setQuiz({
         dateCreated: new Date().toLocaleDateString(),
         published: false,
         quizId: String(Date.now()),
         isValid: false,
         title: '',
         description: '',
         numberQuestions: 0,
         questions: [],
         password: '',
         ownerName: '',
         ownerEmail: ''
      })
   }

   return (
      <React.Fragment>
         {quizIsCreated ?
            (<AlertWindow color="warning">
               <strong>Your quiz was created click,</strong>
               <Link
                  to={`quiz/edit/${createQuiz.quizId}`}
                  onClick={() => switcAlertWindow()}>
                  <span className="text-primary"> here </span>
               </Link>
               <strong> to edit</strong>
               <br />
               <strong>Go to your Quizzes list</strong>
               <Link
                  to={`/quizzes-list`}
                  onClick={() => switcAlertWindow()}>
                  <span className="text-primary"> here </span>
               </Link>
               <br />
               <strong>Create new quiz</strong>
               <Link
                  to={`/`}
                  onClick={() => {
                     switcAlertWindow()
                     resetCreatQuizMain()
                  }}>
                  <span className="text-primary"> here </span>
               </Link>
            </AlertWindow>) : (
               <CardContainer>
                  <form onSubmit={handleSubmit}>
                     <span>
                        <strong style={{ fontSize: '17px' }}>Create your quiz</strong>
                        <button
                           style={{ float: 'right' }}
                           className="btn  btn-sm btn-blue"
                           type="submit">
                           Create quiz
                        </button>
                     </span>
                     <hr />
                     <SmallMessage
                        message="This is a quiz title"
                        color="black"
                     />
                     <FormInput
                        className="form-control"
                        name="title"
                        label={'Title*'}
                        type="text"
                        placeholder="Title*"
                        required
                        value={createQuiz.title}
                        onChange={handleChange}
                     />
                     <SmallMessage
                        message="This is a quiz description"
                        color="black"
                     />
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
                     <SmallMessage
                        message="Owner name"
                        color="black"
                     />
                     <FormInput
                        className="form-control"
                        name="ownerName"
                        label={'Owner name*'}
                        type="text"
                        placeholder="Owner name*"
                        required
                        value={createQuiz.ownerName}
                        onChange={handleChange}
                     />
                     <SmallMessage
                        message="Owner email, This is email that results will recived"
                        color="black"
                     />
                     <FormInput
                        className="form-control"
                        name="ownerEmail"
                        label={'Owner email*'}
                        type="text"
                        placeholder="Owner email*"
                        required
                        value={createQuiz.ownerEmail}
                        onChange={handleChange}
                     />
                     <SmallMessage
                        message="Password"
                        color="black"
                     />
                     <FormInput
                        className="form-control"
                        name="password"
                        label={'Password*'}
                        type="password"
                        placeholder="Password*"
                        required
                        value={createQuiz.password}
                        onChange={handleChange}
                     />
                  </form>
               </CardContainer>)}
      </React.Fragment>
   )
}


function mapDispatchToProps(dispatch: Function) {
   return {
      addQuiz: (quiz: Quiz) => dispatch(addQuizAction(quiz)),
   }
}

export default withRouter(
   connect(null, mapDispatchToProps)(CreateMainQuizForm)
) 