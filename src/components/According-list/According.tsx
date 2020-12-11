import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AddUnswer, Qestion, RemoveQestion, RemoveUnswer } from '../../redux/quiz/model'
import { addUnswerAction, removeQestionAction, removeUnswerAction } from '../../redux/quiz/quiz.action'


interface AccordingListProps {
   quizId: string
   qestions: Qestion[],
   removeQestion: (info: RemoveQestion) => void
   removeUnswer: (info: RemoveUnswer) => void
   addUnswer: (info: AddUnswer) => void
}

function AccordingList({ removeUnswer, removeQestion, addUnswer, quizId, qestions }: AccordingListProps) {


   return (
      <div className="accordion" id="accordionExample">
         {
            qestions.map((qestion, index) => {
               console.log(qestion.numberOfUnswers)
               return <div key={qestion.qestionId}>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id={qestion.qestionId}>
                        {qestion.numberOfUnswers < 2 &&
                           <small
                              className="text-danger"
                              style={{ fontSize: '12px' }}
                           >
                              This qestion missin unswer
                           </small>
                        }
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target={`#collapse${qestion.qestionId + 1}`}
                           aria-expanded="true"
                           aria-controls={`collapse${qestion.qestionId + 1}`}
                        >
                           <strong>Qestion:</strong> &nbsp; {qestion.qestion}
                        </button>
                     </h2>
                     <div
                        id={`collapse${qestion.qestionId + 1}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={qestion.qestionId}
                        data-bs-parent="#accordionExample"
                     >
                        <div className="accordion-body">
                           <button
                              className="btn btn-danger btn-sm"
                              onClick={() => {
                                 removeQestion({
                                    quizId: quizId,
                                    qestionId: qestion.qestionId
                                 })
                              }}
                           >
                              Delete qestion
                          </button>
                           <button
                              style={{ float: 'right' }}
                              className="btn btn-dark btn-sm"
                              onClick={() => {
                                 const unswer = window.prompt('הכנס תשובה') as string

                                 if (unswer !== '') {
                                    addUnswer({
                                       quizId: quizId,
                                       qestionId: qestion.qestionId,
                                       unswer: unswer
                                    })
                                 }
                              }}
                           >
                              Add unswer
                          </button>
                           <br />
                           <br />
                           <ul className="list-group">
                              {
                                 qestion.unswers.map((unswer, index) => {
                                    return <li
                                       key={index + qestion.qestionId}
                                       className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                       <strong> Unswer {index} :</strong>
                                       <span className="qestion-accordion">{unswer}</span>
                                       <span
                                          className="badge bg-danger rounded-pill"
                                          onClick={() => {
                                             removeUnswer({
                                                quizId: quizId,
                                                qestionId: qestion.qestionId,
                                                index: index
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
            })
         }
      </div>
   )
}


function mapDispatchToProps(dispatch: Function) {
   return {
      removeQestion: (info: RemoveQestion) => dispatch(removeQestionAction(info)),
      removeUnswer: (info: RemoveUnswer) => dispatch(removeUnswerAction(info)),
      addUnswer: (info: AddUnswer) => dispatch(addUnswerAction(info))
   }
}

export default connect(null, mapDispatchToProps)(AccordingList)


