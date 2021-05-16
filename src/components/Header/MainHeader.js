import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
   return (
      <header className={classes.header}>
         <nav>
            <ul>
               <li>
                  <NavLink to="/" activeClassName={classes.active} > Home </NavLink>
               </li>

               <li>
                  <NavLink to="/visualization" activeClassName={classes.active}> Visualization </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default MainHeader;