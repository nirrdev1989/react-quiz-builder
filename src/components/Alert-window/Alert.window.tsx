import React from 'react'
// import { connect } from 'react-redux'

function AlertWindow({ children, closeWindow }: any) {
   return (
      <>
         <div className="alert-con">
            <div className="alert-window">
               <div className="alert alert-dark" role="alert">
                  <h4 className="alert-heading">Well done!
                     <span
                        className="delete-quiz-btn"
                        onClick={() => closeWindow()}
                     >
                        x
                     </span>
                  </h4>
                  <hr />
                  {children}
               </div>
            </div>
         </div>
      </>
   )
}



export default AlertWindow