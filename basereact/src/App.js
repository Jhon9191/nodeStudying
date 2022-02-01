/* eslint-disable react/react-in-jsx-scope */
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import { Router } from 'react-router-dom';
import History from './services/history';

function App() {
  return (
    <Router history={History}>
      <Header />
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
