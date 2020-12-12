import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'

function Header() {

   const quizzesCount = useSelector((state: RootState) => Object.keys(state.quizzes).length)

   return (
      <React.Fragment>
         <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
               <Link
                  className="navbar-brand"
                  to="/" >
                  <strong>Quiz Builder</strong>
               </Link>
               <ul className="navbar-nav ">
                  <li className="nav-item">
                     <Link
                        className="nav-link mr-5"
                        to="/quizzes-list" >
                        <strong>Quizzes list</strong>
                        &nbsp;
                         <span
                           className="badge"
                           style={{ backgroundColor: 'rgb(236, 12, 87)' }}
                        >
                           {quizzesCount}
                        </span>
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </React.Fragment>
   )
}

export default Header