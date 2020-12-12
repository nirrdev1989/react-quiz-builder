import React, { ChangeEvent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AddUnswer, EditQestion, Qestion, RemoveQestion, RemoveUnswer } from '../../redux/quiz/model'
import { addUnswerAction, editQestionAction, removeQestionAction, removeUnswerAction } from '../../redux/quiz/quiz.action'
import { ReactComponent as EditIcon } from "../../icons-svg/edit.svg";
import UnswerItem from '../Answer-item/Answer.item';
import AlertWindow from '../Alert-window/Alert.window';
import { firstChartToUpperCase } from '../../utils/first.chart.uppercase';


interface AccordingListProps {
   quizId: string
   qestions: Qestion[],
   removeQestion: (info: RemoveQestion) => void
   removeUnswer: (info: RemoveUnswer) => void
   addUnswer: (info: AddUnswer) => void
   editQestion: (info: EditQestion) => void
}

function AccordingList({ editQestion, removeUnswer, removeQestion, addUnswer, quizId, qestions }: AccordingListProps) {

   const [isEditMode, setIsEditMode] = useState<boolean>(false)
   const [currentFiled, setCurrentField] = useState<string>('')

   const [editInfo, setEditInfo] = useState<EditQestion | AddUnswer>({
      quizId: quizId,
      qestionId: '',
      value: ''
   })

   function handleEditQuiz(info: EditQestion) {
      editQestion(info)
   }

   function handelEditChange(event: ChangeEvent<HTMLInputElement>) {
      const { value } = event.target
      console.log(value)
      setEditInfo((prev) => {
         return {
            ...prev,
            qestionId: editInfo.qestionId,
            value: value
         }
      })
   }

   return (
      <React.Fragment>
         <div className="accordion" id="accordionExample">
            {
               qestions.map((qestion, index) => {
                  return <div key={qestion.qestionId}>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id={qestion.qestionId}>
                           {qestion.numberOfUnswers < 2 &&
                              <small
                                 className="text-danger"
                                 style={{ fontSize: '12px' }}
                              >
                                 This qestion missing unswer
                           </small>
                           }
                           <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${qestion.qestionId + 1}`}
                              // aria-expanded="false"
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
                              {isEditMode ?
                                 (<AlertWindow
                                    color={'warning'}
                                 >
                                    <label className="mb-1">{firstChartToUpperCase(currentFiled)}*</label>
                                    <div className="center-element">
                                       <input
                                          required
                                          className="form-control"
                                          onChange={handelEditChange}
                                          type="text"
                                          name={editInfo.value}
                                          placeholder={firstChartToUpperCase(currentFiled)}
                                       />
                                    </div>
                                    <div className="mt-3">
                                       <button
                                          type="submit"
                                          className="btn btn-blue btn-sm"
                                          onClick={() => {
                                             if (editInfo.value !== '' && editInfo.value !== null) {
                                                if (currentFiled === 'edit-qestion') {
                                                   editQestion(editInfo)
                                                   setIsEditMode(!isEditMode)
                                                }
                                                else if (currentFiled === 'add-unswer') {
                                                   addUnswer(editInfo)
                                                   setIsEditMode(!isEditMode)
                                                }
                                             }
                                          }}
                                       >
                                          Save
                                       </button>
                                          &nbsp;
                                          <button
                                          className="btn btn-pink btn-sm"
                                          onClick={() => setIsEditMode(!isEditMode)}
                                       >
                                          Cencel
                                      </button>
                                    </div>
                                 </AlertWindow>) : (
                                    <React.Fragment>
                                       <button
                                          className="btn btn-pink btn-sm"
                                          onClick={() => {
                                             removeQestion({
                                                quizId: quizId,
                                                qestionId: qestion.qestionId
                                             })
                                          }}
                                       >
                                          Delete qestion
                                       </button>
                                       &nbsp;
                                       <EditIcon className="edit-icon"
                                          onClick={() => {
                                             setIsEditMode(!isEditMode)
                                             setCurrentField('edit-qestion')
                                             setEditInfo({
                                                quizId: quizId,
                                                qestionId: qestion.qestionId,
                                                value: ''
                                             })
                                          }} />
                                       <button
                                          style={{ float: 'right' }}
                                          className={`${qestion.numberOfUnswers >= 6 ? 'disabled-btn' : ''} btn btn-balck btn-sm`}
                                          onClick={() => {
                                             setIsEditMode(!isEditMode)
                                             setCurrentField('add-unswer')
                                             setEditInfo({
                                                quizId: quizId,
                                                qestionId: qestion.qestionId,
                                                value: ''
                                             })
                                          }}
                                       >
                                          Add unswer
                                       </button>
                                       <br />
                                       <br />
                                       <ul className="list-group">
                                          {
                                             qestion.unswers.map((unswer, index) => {
                                                return <UnswerItem
                                                   key={index + qestion.qestionId}
                                                   unswer={unswer}
                                                   index={index}
                                                >
                                                   <span
                                                      className="badge  rounded-pill"
                                                      style={{ backgroundColor: 'rgb(236, 12, 87)' }}
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
                                                </UnswerItem>
                                             })
                                          }
                                       </ul>
                                    </React.Fragment>)
                              }
                           </div>
                        </div>
                     </div>
                  </div>
               })
            }
         </div>
      </React.Fragment>
   )
}


function mapDispatchToProps(dispatch: Function) {
   return {
      removeQestion: (info: RemoveQestion) => dispatch(removeQestionAction(info)),
      removeUnswer: (info: RemoveUnswer) => dispatch(removeUnswerAction(info)),
      addUnswer: (info: AddUnswer) => dispatch(addUnswerAction(info)),
      editQestion: (info: EditQestion) => dispatch(editQestionAction(info))
   }
}

export default connect(null, mapDispatchToProps)(AccordingList)


