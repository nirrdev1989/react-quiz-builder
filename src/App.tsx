import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';
import Footer from './components/Footer/Footer';


const CreateQuizPage = React.lazy(() => import('./pages/Create.quiz.page'))
const QuizzesListPage = React.lazy(() => import('./pages/Quizzes.list.page'))
const ManageQuizPage = React.lazy(() => import('./pages/Manage.quiz.page'))
const QuizPage = React.lazy(() => import('./pages/Quiz.page'))


// const QuizPage = React.lazy((): any => {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          return resolve(import('./pages/Quiz.page'))
//       }, 2000);
//    })
// })

function App() {
   return (
      <React.Fragment>
         <Header />
         <main>
            <div className="container mt-4 mb-4">
               <Switch>
                  <Suspense fallback={null} >
                     <Route
                        exact={true}
                        path="/"
                        component={CreateQuizPage}
                     />
                     <Route
                        exact={true}
                        path="/quizzes-list"
                        component={QuizzesListPage}
                     />
                     <Route
                        exact={true}
                        path="/quiz/:quizId"
                        component={QuizPage}
                     />
                     <Route
                        exact={true}
                        path="/quiz/edit/:quizId"
                        component={ManageQuizPage}
                     />
                  </Suspense>
               </Switch>
               {/* <p className="float-end mt-3 mb-2">
                  <a href="#" style={{ textDecoration: 'none' }}>
                     <strong>Back to top</strong>
                  </a>
               </p> */}
            </div>
         </main>
         <Footer />
      </React.Fragment>
   );
}

export default App;
