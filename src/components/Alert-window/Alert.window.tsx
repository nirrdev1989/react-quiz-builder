import React from 'react'

function AlertWindow({ children, closeWindow, color }: any) {
   return (
      <React.Fragment>
         <div
            className={`alert alert-${color}  fade show`}
            role="alert"
         >
            {closeWindow &&
               <h4 className="alert-heading">
                  <button
                     type="button"
                     className="btn-close"
                     data-bs-dismiss="alert"
                     aria-label="Close">
                  </button>
               </h4>
            }

            {children}

         </div>
      </React.Fragment >
   )
}

export default AlertWindow