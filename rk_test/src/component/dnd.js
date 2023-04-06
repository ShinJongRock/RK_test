
import React, { useState, useRef } from 'react';

import Chat_1 from './chat_1';
import Chat_2 from './chat_2';
import Chat_3 from './chat_3';
import Chat_4 from './chat_4';
 
const Dnd = () => {
  
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([
    <Chat_1/>,<Chat_2/>,<Chat_3/>,<Chat_4/>,'Item 5','Item 6'
  ]);
 
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent); 
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };
 
  return (
 
    <> 
      <div style={{display:'flex',width:'100%', flexWrap:'wrap' }}>
    {
    list &&
    list.map((item, index) => (
        <div style={{border:'1px outset', margin:'20px ', textAlign:'center', fontSize:'40px' ,height:'350px' }}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
          {item}
      </div>
      ))}
      </div>
    </>
    
  );
};
export default Dnd;
