import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/Theme/ThemeContext';

ReactDOM.render(
   <ThemeProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </ThemeProvider>
   ,
   document.getElementById('root'));
