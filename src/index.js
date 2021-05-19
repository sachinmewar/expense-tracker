import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/Theme/ThemeContext';
import { AuthContextProvider } from './components/store/auth-context';

ReactDOM.render(
   <AuthContextProvider>
      <ThemeProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ThemeProvider>
   </AuthContextProvider>
   ,
   document.getElementById('root'));
