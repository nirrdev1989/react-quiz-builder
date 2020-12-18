import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../../redux/store'

function Header() {

   const quizzesCount = useSelector((state: RootState) => Object.keys(state.quizzes).length)

   return (
      <React.Fragment>
         <nav className="navbar navbar-light bg-light shadow-sm">
            <div className="container-fluid">
               <NavLink
                  id="brand"
                  className="navbar-brand"
                  to="/" >
                  <span style={{ fontWeight: 500 }}>Quiz Builder</span>
               </NavLink>
               <ul className="navbar-nav ">
                  <li className="nav-item">
                     <NavLink
                        className="nav-link mr-5"
                        to="/quizzes-list" >
                        <span style={{ fontWeight: 500 }}>Quizzes list</span>
                        &nbsp; &nbsp;
                         <span
                           className="badge"
                           style={{ backgroundColor: 'rgb(236, 12, 87)' }}>
                           {quizzesCount}
                        </span>
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </React.Fragment>
   )
}

export default Header