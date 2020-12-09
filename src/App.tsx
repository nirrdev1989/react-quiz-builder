import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CreateQuiz from './components/Create-quiz/Create.quiz';
import { Route, Switch } from 'react-router';
import CreateQuizPage from './pages/Create.quiz.page';
import QuizzesListPage from './pages/Quizzes.list.page';



function App() {

   return (
      <div className="App">
         <Header />
         <main>
            <div className="container">
               <Switch>
                  <Route exact={true} path="/" component={CreateQuizPage} />
                  <Route exact={true} path="/quizzes-list" component={QuizzesListPage} />
               </Switch>
            </div>
         </main>
         <Footer />
      </div>
   );
}






export default App;
