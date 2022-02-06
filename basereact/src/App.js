/* eslint-disable react/react-in-jsx-scope */
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import { Router } from 'react-router-dom';
import History from './services/history';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Router history={History}>
        <Header />
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
