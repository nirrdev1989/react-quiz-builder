import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FormInput from './components/Form-input/Form.input';
// import uuid from 'react-uuid'


interface Qestion {
   qestion: string
   numberOfUnswers: number
   unswers: string[]
}



interface Quiz {
   title: string,
   description: string,
   numberQestions: number,
   qestions: Qestion[]
}

interface Quizs {
   [key: number]: {
      quiz: Quiz
   }
}

const quiz: Quiz = {
   title: 'food lover',
   description: 'this quiz about what u like to eat',
   numberQestions: 2,
   qestions: [
      {
         qestion: 'what do u like eat',
         numberOfUnswers: 3,
         unswers: ['banana', 'apple', 'watermelon']
      },
      {
         qestion: 'what do u drink eat',
         numberOfUnswers: 4,
         unswers: ['cola', 'sprite', 'water', 'fanta']
      }
   ]
}





function App() {

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

   const [addQestion, setAddQestion] = useState<boolean>(false)


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

      // console.log(qestion)
   }

   function handleUnswersChnage(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target
      let unswers = [...qestion.unswers]
      unswers[Number(name)] = value

      setQestion((prev) => {
         return {
            ...prev,
            unswers: unswers
         }
      })

      // console.log(qestion)
   }


   function add() {
      console.log(qestion)

      setQuiz((prev) => {
         return {
            ...prev,
            numberQestions: prev.numberQestions + 1,
            qestions: [...prev.qestions, qestion]
         }
      })

      setAddQestion(!addQestion)

      resetQestion()


   }


   function handleSubmit(event: FormEvent) {
      event.preventDefault()

      const newQuiz: Quizs = {}

      newQuiz[Math.floor(Math.random() * 1000000) + Date.now()] = {
         quiz: createQuiz
      }


      console.log(newQuiz)


   }


   function resetQestion() {
      setQestion({
         numberOfUnswers: 0,
         qestion: '',
         unswers: []
      })
   }


   useEffect(() => {



   }, [qestion.numberOfUnswers, qestion.unswers])


   return (
      <div className="App">
         <Header />
         <main>
            <div className="container">
               <form onSubmit={handleSubmit}>
                  <div className="input-ele">
                     <div className="form-floating mb-3">
                        <input
                           name="title"
                           type="text"
                           className="form-control"
                           placeholder="Title"
                           onChange={handleChange}
                        />
                        <label >Title</label>
                     </div>
                  </div>
                  <div className="input-ele">
                     <div className="form-floating mb-3">
                        <textarea
                           style={{ height: "150px" }}
                           rows={5}
                           cols={5}
                           name="description"
                           className="form-control"
                           placeholder="Description"
                           onChange={handleChange}
                        />
                        <label >Description</label>
                     </div>
                  </div>
                  {
                     addQestion ?
                        (
                           <div>
                              <div className="input-ele">
                                 <div className="form-floating mb-3">
                                    <input
                                       value={qestion.qestion}
                                       className="form-control"
                                       type="text"
                                       name="qestion"
                                       placeholder="Qestion"
                                       onChange={handleQestionChange}
                                    />
                                    <label >Qestion</label>
                                 </div>
                              </div>
                              <div className="input-ele">
                                 <label>Number of unswers</label>
                                 <input
                                    id="count-unswers"
                                    value={qestion.numberOfUnswers}
                                    type="number"
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
                                          type="text"
                                          className="form-control"
                                          placeholder={`Unswer: ${index + 1}`}
                                          onChange={handleUnswersChnage}
                                       />
                                    </div>
                                 })
                              }
                              <div className="input-ele">
                                 <button
                                    onClick={add} className="btn btn-info btn-sm"
                                 >
                                    Add qestion
                                 </button>
                                 &nbsp;
                                 <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => {
                                       setAddQestion(!addQestion)
                                       resetQestion()
                                    }}
                                 >
                                    Cencel
                                 </button>
                              </div>
                           </div>
                        ) :
                        <div className="input-ele">
                           Add qestion  <button
                              onClick={() => setAddQestion(!addQestion)}
                              className="btn btn-warning btn-sm"
                           >
                              +
                          </button>
                        </div>
                  }
                  <div className="input-ele">
                     <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                  </div>
               </form>
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default App;
