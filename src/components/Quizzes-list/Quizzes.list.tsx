import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
// import AlertWindow from '../Alert-window/Alert.window'
// import Loader from '../Loader/Loader'
import QuizCardItem from '../Quiz-card-item/Quiz.card.item'
// import SmallMessage from '../Small-massage/Small.message'


function QuizzesList() {
   const quizzes = useSelector((state: RootState) => state.quizzes)
   // const { loading, error } = useSelector((state: RootState) => state.quizAsyncReducer)


   return (
      <React.Fragment>
         {/* {error &&
            <AlertWindow color="danger">
               <SmallMessage
                  message={error}
                  color="black"
               />
            </AlertWindow>}
         {loading ? <Loader /> : */}
         <div className="row row-cols-1 row-cols-md-3  text-center">
            {Object.keys(quizzes).length !== 0 ?
               (Object.entries(quizzes).map(([quizId, { quiz }]) => {
                  return <div key={quizId}>
                     <QuizCardItem
                        quizId={quizId}
                        quiz={quiz}
                     />
                  </div>
               })) : (
                  <h3 >No Quizzes</h3>
               )}
         </div>
         {/* // } */}
      </React.Fragment>
   )
}

export default QuizzesList