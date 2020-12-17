import React from 'react'
import FadeAnimateContainer from '../Fade-animate-container/Fade.animate.container'

function AlertWindow({ children, closeWindow, color }: any) {
   return (
      <React.Fragment>
         <FadeAnimateContainer>
            <div
               className={`alert alert-${color} mt-3  fade show`}
               role="alert">
               {closeWindow &&
                  <h4 className="alert-heading">
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close">
                     </button>
                  </h4>}
               {children}
            </div>
         </FadeAnimateContainer>
      </React.Fragment >
   )
}

export default AlertWindow