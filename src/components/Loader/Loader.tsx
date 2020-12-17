import React from 'react'


function Loader() {
   return (
      <React.Fragment>
         <div id="loader">
            {/* <div className="spinner-border text-primary" role="status">
               <span className="visually-hidden">Loading...</span>
            </div> */}
         </div>
         {/* <div className="progress">
            <div
               className="progress-bar progress-bar-striped progress-bar-animated"
               role="progressbar"
               aria-valuenow={75}
               aria-valuemin={0}
               aria-valuemax={100}
               style={{ width: '100%' }}>
            </div>
         </div> */}
      </React.Fragment>
   )
}

export default Loader