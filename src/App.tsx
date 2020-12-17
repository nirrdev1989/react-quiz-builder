import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';
import Loader from './components/Loader/Loader';
// import CreateQuizPage from './pages/Create.quiz.page';
// import QuizzesListPage from './pages/Quizzes.list.page';
// import QuizPage from './pages/Quiz.page';
// import ManageQuizPage from './pages/Manage.quiz.page';
// import Footer from './components/Footer/Footer'

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
      <div className="App">
         <Header />
         <main>
            <div className="container">
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
            </div>
         </main>
         {/* <Footer /> */}
      </div>
   );
}

export default App;
