import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';
// import CreateQuizPage from './pages/Create.quiz.page';
// import QuizzesListPage from './pages/Quizzes.list.page';
// import QuizPage from './pages/Quiz.page';
// import ManageQuizPage from './pages/Manage.quiz.page';
// import Footer from './components/Footer/Footer'

const CreateQuizPage = React.lazy(() => import('./pages/Create.quiz.page'))
const QuizzesListPage = React.lazy(() => import('./pages/Quizzes.list.page'))
const ManageQuizPage = React.lazy(() => import('./pages/Manage.quiz.page'))
const QuizPage = React.lazy(() => import('./pages/Quiz.page'))


function App() {
   return (
      <div className="App">
         <Header />
         <main>
            <div className="container">
               <Switch>
                  <Suspense fallback={<div>Loading...</div>}>
                     <Route
                        exact={true}
                        path="/"
                        component={CreateQuizPage}
                     />
                     {/* </Suspense> */}
                     {/* <Suspense fallback={<div>Loading...</div>}> */}
                     <Route
                        exact={true}
                        path="/quizzes-list"
                        component={QuizzesListPage} />

                     {/* </Suspense> */}
                     {/* <Suspense fallback={<div>Loading...</div>}> */}
                     <Route
                        exact={true}
                        path="/quiz/:quizId"
                        component={QuizPage}
                     />
                     {/* </Suspense> */}
                     {/* <Suspense fallback={<div>Loading...</div>}> */}
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
