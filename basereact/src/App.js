/* eslint-disable react/react-in-jsx-scope */
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import { Router } from 'react-router-dom';
import History from './services/history';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router history={History}>
      <Header />
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
