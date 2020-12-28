import React from 'react';
import { Quiz } from '../../redux/quiz/model';
import { connect } from "react-redux";
import { addQuizAction } from '../../redux/quiz/quiz.action';
import { withRouter } from 'react-router';
import AlertWindow from '../Alert-window/Alert.window';
import { Link } from 'react-router-dom';
import CardContainer from '../Card-container/Card.container'
import SmallMessage from '../Small-massage/Small.message';
import FormInput from '../Form-input/Form.input';
import { useForm } from '../../hooks/use.form';
import { createQuizMainValidate, FormErros } from '../../form-validators/validators';


let initialState = {
   dateCreated: new Date().toLocaleDateString(),
   published: false,
   quizId: String(Date.now()),
   title: '',
   description: '',
   numberQuestions: 0,
   questions: [],
   // password: '',
   // ownerName: '',
   // ownerEmail: ''
}



interface CreateQuizProps {
   addQuiz: (quiz: Quiz) => void
}

function CreateMainQuizForm({ addQuiz }: CreateQuizProps) {

   const [values, handleChange, handleSubmit, isSubmit, errors] = useForm(initialState, callSubmit, createQuizMainValidate)

   function callSubmit() {
      addQuiz(values)
   }


   return (
      <React.Fragment>
         {isSubmit && Object.keys(errors).length === 0 ?
            (<AlertWindow color="warning">
               <strong>Your quiz was created click,</strong>
               <Link
                  to={`quiz/edit/${initialState.quizId}`}
               >
                  <span className="text-primary"> here </span>
               </Link>
               <strong> to edit</strong>
               <br />
               <strong>Go to your Quizzes list</strong>
               <Link
                  to={`/quizzes-list`}
               >
                  <span className="text-primary"> here </span>
               </Link>
            </AlertWindow>) : (
               <CardContainer>
                  <form noValidate onSubmit={handleSubmit}>
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
                     {Object.keys(errors).length > 0 && isSubmit &&
                        <AlertWindow color="danger">
                           {Object.values(errors as FormErros).map((error, index) => {
                              return <div key={error.validatorName + index} className="mb-1">
                                 <SmallMessage
                                    message={error.message}
                                    color="red"
                                 />
                              </div>
                           })}
                        </AlertWindow>}
                     <SmallMessage
                        message="Quiz title"
                        color="black"
                     />
                     <FormInput
                        className="form-control"
                        name="title"
                        label={'Title*'}
                        type="text"
                        placeholder="Title*"
                        required
                        value={values.title}
                        onChange={handleChange}
                     />
                     <SmallMessage
                        message="Quiz description"
                        color="black"
                     />
                     <div className="form-floating mb-3">
                        <textarea
                           style={{ height: "150px" }}
                           rows={5}
                           cols={5}
                           required
                           name="description"
                           value={values.description}
                           className="form-control"
                           placeholder="Description*"
                           onChange={handleChange} />
                        <label >Description*</label>
                     </div>
                     {/* <SmallMessage
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
                        value={values.ownerName}
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
                        type="email"
                        placeholder="Owner email*"
                        required
                        value={values.ownerEmail}
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
                        value={values.password}
                        onChange={handleChange}
                     /> */}
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