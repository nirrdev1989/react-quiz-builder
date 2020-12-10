import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Qestion, RemoveQestion } from '../../redux/quiz/model'
import { removeQestionAction } from '../../redux/quiz/quiz.action'


interface AccordingListProps {
   quizId: string
   qestions: Qestion[],
   removeQestion: (info: RemoveQestion) => void
}

function AccordingList({ removeQestion, quizId, qestions }: AccordingListProps) {


   return (
      <div className="accordion" id="accordionExample">
         <div className="accordion-item">
            <h2 className="accordion-header" id={quizId}>
               <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${quizId + 1}`}
                  aria-expanded="true"
                  aria-controls={`collapse${quizId + 1}`}
               >
                  Qestions list
                  </button>
            </h2>
            <div
               id={`collapse${quizId + 1}`}
               className="accordion-collapse collapse"
               aria-labelledby={quizId}
               data-bs-parent="#accordionExample"
            >
               <div className="accordion-body">
                  <ul className="list-group">
                     {
                        qestions.map((qestion, index) => {
                           return <li
                              key={qestion.qestionId}
                              className="list-group-item d-flex justify-content-between align-items-center"
                           >
                              <strong> Qestion {index} :</strong> <span className="qestion-accordion">{qestion.qestion}</span>
                              <span
                                 className="badge bg-danger rounded-pill"
                                 onClick={() => {
                                    removeQestion({
                                       quizId: quizId,
                                       qestionId: qestion.qestionId
                                    })
                                 }}
                              >
                                 x
                              </span>
                           </li>
                        })
                     }
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}


function mapDispatchToProps(dispatch: Function) {
   return {
      removeQestion: (info: RemoveQestion) => dispatch(removeQestionAction(info))
   }
}

export default connect(null, mapDispatchToProps)(AccordingList)