import React, { useContext } from 'react';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import './SwitchTheme.css';
import ThemeContext from './ThemeContext'

const SwitchTheme = () => {
   const { dark, toggle } = useContext(ThemeContext);
   return (
      <button className='switch-button'
         onClick={() => toggle()}
      >
         <Sun className={`icon ${!dark ? 'active' : ''}`} />
         <Moon className={`icon ${dark ? 'active' : ''}`} />
      </button>
   );
};

export default SwitchTheme;