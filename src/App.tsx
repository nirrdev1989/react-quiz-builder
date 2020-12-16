import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';
import CreateQuizPage from './pages/Create.quiz.page';
import QuizzesListPage from './pages/Quizzes.list.page';
import QuizPage from './pages/Quiz.page';
import ManageQuizPage from './pages/Manage.quiz.page';
// import Footer from './components/Footer/Footer'

// const CreateQuizPage = React.lazy(() => import('./pages/Create.quiz.page'))


function App() {
   return (
      <div className="App">
         <Header />
         <main>
            <div className="container">
               <Switch>
                  {/* <Suspense fallback={'...load'}> */}
                  <Route
                     exact={true}
                     path="/"
                     component={CreateQuizPage}
                  />

                  {/* </Suspense> */}
                  <Route
                     exact={true}
                     path="/quizzes-list"
                     component={QuizzesListPage} />
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
               </Switch>
            </div>
         </main>
         {/* <Footer /> */}
      </div>
   );
}

export default App;
