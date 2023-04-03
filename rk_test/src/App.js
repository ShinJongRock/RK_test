import { BrowserRouter, Routes, Route, useRef } from 'react-router-dom';
import './App.css';
import Main from './pags/main';
import Sid from './pags/sid';
import Log from './pags/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="a" element={<Sid/>}></Route>
          <Route path="login" element={<Log/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
