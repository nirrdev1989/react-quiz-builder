import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router';
import CreateQuizPage from './pages/Create.quiz.page';
import QuizzesListPage from './pages/Quizzes.list.page';
import QuizPage from './pages/Quiz.page';
import ManageQuizPage from './pages/Manage.quiz.page';



function App() {

   return (
      <div className="App">
         <Header />
         <main>
            <div className="container">
               <Switch>
                  <Route
                     exact={true}
                     path="/"
                     component={CreateQuizPage}
                  />
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
         <Footer />
      </div>
   );
}

export default App;
