import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Qestion } from '../../redux/quiz/model'



function AddQestionForm({ addQestion, closeAddQestionForm }: any) {

   // console.log('ADD QESTION RENDER')

   const [qestion, setQestion] = useState<Qestion>({
      qestionId: '',
      qestion: '',
      numberOfUnswers: 0,
      unswers: []
   })


   function handleQestionChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target

      if (name === 'numberOfUnswers') {
         if (Number(value) > 6) {
            return alert('6 תשובות מקסימום')
         }
      }

      setQestion((prev) => {
         return {
            ...prev,
            qestionId: String(Date.now()),
            [name]: name === 'numberOfUnswers' ? Number(value) : value
         }
      })
   }

   function handleUnswersChnage(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target

      const unswers = [...qestion.unswers]
      unswers[Number(name)] = value

      setQestion((prev) => {
         return {
            ...prev,
            unswers: unswers
         }
      })
   }


   function handleSubmit(event: FormEvent) {
      event.preventDefault()
      console.log(qestion.unswers)

      if (qestion.qestion === '' || qestion.numberOfUnswers < 2 || qestion.unswers.length < 2) {
         return alert('מספר התשובות חייב להיות יותר מ1 ')
      }

      addQestion(qestion)
      resetQestion()

   }


   function resetQestion() {
      setQestion({
         qestionId: '',
         numberOfUnswers: 0,
         qestion: '',
         unswers: []
      })
   }

   return (
      <div>
         <form onSubmit={handleSubmit} >
            {/* <div className="input-ele"> */}
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
            {/* </div> */}
            {/* <div className="input-ele"> */}
            <span>Number of unswers</span>
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
            {/* </div> */}
            <br />
            {
               Array.from({ length: qestion.numberOfUnswers }).map((_, index) => {
                  return <div key={index}>
                     <input
                        name={`${index}`}
                        // value={qestion.unswers[index]}
                        type="text"
                        required
                        className="form-control form-control-sm mb-2"
                        placeholder={`Unswer: ${index + 1}`}
                        onChange={handleUnswersChnage}
                     />

                  </div>
               })
            }
            {/* <div className="input-ele"> */}
            <br />
            <button
               type="submit"
               className="btn btn-primary btn-sm"
            >
               Add qestion
               </button>
                 &nbsp;
               <button
               className="btn btn-danger btn-sm"
               onClick={() => {
                  resetQestion()
                  closeAddQestionForm()
               }}
            >
               Cencel
               </button>
            {/* </div> */}
         </form>
      </div>
   )
}


export default AddQestionForm