import { BrowserRouter, Routes, Route, useRef } from 'react-router-dom';
import './App.css';
import Main from './pags/main';
import Sid from './pags/sid';
import Log from './pags/login';
import Dnd from '../src/component/dnd';
import Chat from '../src/component/chat_1';

import Crad2 from './pags/card_2';
import Cu from './pags/cu';
import IS_wep from './pags/is_wep';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="sid" element={<Sid/>}></Route>
          <Route path="login" element={<Log/>}></Route>
          <Route path="Dnd" element={<Dnd/>}></Route>
          <Route path="Chat" element={<Chat/>}></Route>
          <Route path="Cu" element={<Cu/>}></Route>

     
          <Route path="Crad2" element={<Crad2/>}></Route>
          <Route path="IS_wep" element={<IS_wep/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
