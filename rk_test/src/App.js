import { BrowserRouter, Routes, Route, useRef } from 'react-router-dom';
import './App.css';
import Main from './pags/main';
import Sid from './pags/sid';
import Log from './pags/login';
import Dnd from '../src/component/dnd';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="a" element={<Sid/>}></Route>
          <Route path="login" element={<Log/>}></Route>
          <Route path="Dnd" element={<Dnd/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
