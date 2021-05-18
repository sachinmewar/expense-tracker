import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';

const MainHeader = () => {
   const authContext = useContext(AuthContext);

   const logoutHandler = () => {
      authContext.logout();
   };
   return (
      <header className={classes.header}>
         <nav>
            <ul>

               {
                  !authContext.isLoggedIn &&
                  < li >
                     <NavLink to='/auth'> Login </NavLink>
                  </li>
               }

               {
                  authContext.isLoggedIn &&
                  <li>
                     <NavLink to="/expenses" activeClassName={classes.active} > Home </NavLink>
                  </li>
               }

               {
                  authContext.isLoggedIn &&
                  <li>
                     <NavLink to="/profile" activeClassName={classes.active} > Profile </NavLink>
                  </li>
               }

               {
                  authContext.isLoggedIn &&
                  <li>
                     <NavLink to="/visualization" activeClassName={classes.active}> Visualization </NavLink>
                  </li>
               }

               {
                  !authContext.isLoggedIn &&
                  < li >
                     <NavLink to="/auth" activeClassName={classes.active}> </NavLink>"
                  </li>
               }

               {
                  authContext.isLoggedIn &&
                  <li>
                     <button onClick={logoutHandler}>Logout</button>
                  </li>
               }
            </ul>
         </nav>
      </header >
   );
};

export default MainHeader;