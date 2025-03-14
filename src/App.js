import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import './App.css';
import Home from './page/Home';
import Memo from './page/Memo';

import './style.scss';


function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Memo">Memo</NavLink>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Memo' element={<Memo/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
