import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router';

import LoginPage from './components/pages/login/loginPage';
import HomePage from './components/pages/home/homePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );

}

export default App;
