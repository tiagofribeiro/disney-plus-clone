import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/organisms/Header';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
