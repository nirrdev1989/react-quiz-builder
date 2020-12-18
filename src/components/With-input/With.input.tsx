import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ReactComponent as EditIcon } from "../../icons-svg/edit.svg";
import { firstChartToUpperCase } from '../../utils/first.chart.uppercase';
import FormInput from '../Form-input/Form.input';
import SmallMessage from '../Small-massage/Small.message';


function WithInput(Component: React.FC<any>) {
   return function Input({ property, value, type, outPutNewValue, ...props }: any) {

      const [newValue, setNewValue] = useState<string>(value)
      const [isEditMode, setIsEditMode] = useState<boolean>(false)

      function handleSubmit(event: FormEvent) {
         event.preventDefault()
         outPutNewValue(newValue, property)
         switchEditMode()
      }

      function switchEditMode() {
         setIsEditMode(!isEditMode)
      }

      function handleChange(event: ChangeEvent<HTMLInputElement>) {
         setNewValue(() => event.target.value)
      }


      return <React.Fragment>
         {!isEditMode &&
            <EditIcon
               className="edit-icon"
               onClick={switchEditMode}
            />}
         {isEditMode ?
            (<form onSubmit={handleSubmit}>
               <SmallMessage
                  color="black"
                  message={firstChartToUpperCase(property)}
               />
               <FormInput
                  label={firstChartToUpperCase(property) + '*'}
                  placeholder={firstChartToUpperCase(property)}
                  required
                  {...props}
                  className="form-control"
                  onChange={handleChange}
                  name={newValue || ''}
                  value={newValue || ''}
                  type={type}
               />
               <div className="mt-3">
                  <button
                     type="submit"
                     className="btn btn-blue btn-sm">
                     Save
                  </button>
                      &nbsp;
                  <button
                     className="btn btn-pink btn-sm"
                     type="button"
                     onClick={() => {
                        setNewValue(() => value)
                        switchEditMode()
                     }} >
                     Cancel
                  </button>
               </div>
            </form>) : (
               <React.Fragment>
                  &nbsp;  <Component
                     property={property}
                     value={newValue} {...props}
                  />
               </React.Fragment>
            )}
      </React.Fragment>
   }
}


export default WithInput