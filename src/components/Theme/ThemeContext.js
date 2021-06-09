import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
   dark: false,
   toggle: () => { }
});

export default ThemeContext;




const lightTheme = [
   '--border: rgba(0,0,0,.2)',
   '--shadow: #000',
   '--heading: rgba(255,100,0,1)',
   '--main: #af02db',
   '--text: #000',
   '--textAlt: #fff',
   '--inactive: rgba(0,0,0,.3)',
   '--background: white',
   '--container: #4f4e4e',
   '--filter-by-container: #595757'
];

const darkTheme = [
   '--border: rgba(255,255,255,.1)',
   '--shadow: #000',
   '--heading: rgba(255,255,5,.9)',
   '--main: #330140',
   '--text: rgb(255, 255, 255)',
   '--textAlt: #fff',
   '--inactive: rgba(255,255,255,.3)',
   '--background: #2D2D2D',
   '--container: black',
   '--filter-by-container: #242323'
];




export function ThemeProvider(props) {
   // keeps state of the current theme
   const [dark, setDark] = useState(false);

   // paints the app before it renders elements
   useLayoutEffect(() => {
      // The getItem() method of the Storage interface, when passed a key name, will return 
      // that key's value, or null if the key does not exist, in the given Storage object.
      const lastTheme = window.localStorage.getItem('darkTheme');

      if (lastTheme === 'true') {
         setDark(true);
         applyTheme(darkTheme);
      } else {
         setDark(false);
         applyTheme(lightTheme);
      }
      // if state changes, repaints the app
   }, [dark]);

   // rewrites set of css variables/colors
   const applyTheme = theme => {
      const root = document.getElementsByTagName('html')[0];
      root.style.cssText = theme.join(';');
   }

   const toggle = () => {
      const body = document.getElementsByTagName('body')[0];
      body.style.cssText = 'transition: background .5s ease';
      // To memorize the user’s last selection, we’re saving the last selected theme to our 
      // browser’s localStorage.
      setDark(!dark);
      window.localStorage.setItem('darkTheme', !dark);
   };

   return (
      <ThemeContext.Provider value={{
         dark,
         toggle,
      }}>

         {
            // props.children contains whatever is wrapped inside ThemeProvider.
         }

         { props.children}
      </ThemeContext.Provider>
   )
}

//                                     Context.Provider
// Every Context object comes with a Provider React component which allows the consumption of 
// components to subscribe to context changes. In other words, we need to put all the global data 
// and functionality in the Provider to be able 
// to access it later from any component(consumer) in the tree.


// ThemeProvider will return ThemeContext.Provider with the value property which will have the 
// current UI theme state and a function to toggle it.
// Because ThemeProvider wraps around our app, we need to pass children components inside.