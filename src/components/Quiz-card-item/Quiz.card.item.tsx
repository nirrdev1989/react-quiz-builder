import React from 'react'

interface QuizCardItemProps {
   description: string
   title: string
   numberQestions: number
}


function QuizCardItem({ description, title, numberQestions }: QuizCardItemProps) {
   return (
      <>
         <div className="col">
            <div className="card mb-4 shadow-sm">
               <div className="card-header">
                  <h4 className="my-0 fw-normal">
                     {title}
                  </h4>
               </div>
               <div className="card-body">
                  <h3
                     className="card-title pricing-card-title">
                     {numberQestions}
                     <small className="text-muted">
                        / Qestions
                     </small>
                  </h3>
                  <p>Description:</p>
                  <ul className="list-unstyled mt-3 mb-4">
                     <li>{description}</li>
                  </ul>
                  <button
                     type="button"
                     className="w-100 btn btn-sm btn-primary">
                     Get started
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}


export default QuizCardItem