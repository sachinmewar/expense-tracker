import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ThemeProvider } from './components/Theme/ThemeContext';

ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById('root'));
