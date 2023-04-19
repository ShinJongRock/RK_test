import React from 'react';
import Slider from 'infinite-react-carousel';



const cu = () => {
  const settings =  {
    arrowsScroll: 1,
    dots: true,
    wheel: true,
      wheelScroll: 1,
      arrowsScroll: 1,

  };
  return (
    <div >
      <Slider { ...settings }>
    <center>
      <div style={{width:'500px', height:'800px', backgroundColor:'yellow'}}>1</div>
    </center>
    <center>
      <div  style={{width:'500px', height:'800px', backgroundColor:'red'}}>2</div>
    </center>
    <center>
      <div  style={{width:'500px', height:'800px', backgroundColor:'green'}}>3</div>
    </center>
    <center>
      <div  style={{width:'500px', height:'800px', backgroundColor:'#288CFF'}}>4</div>
    </center>
    <center>
      <div  style={{width:'500px', height:'800px', backgroundColor:'#C73399'}}>5</div>
    </center>
    <center>
      <div  style={{width:'500px', height:'800px', backgroundColor:'#C39873'}}>6</div>
    </center>
    <center>
      <div  style={{width:'1000px', height:'800px', }}>
        <table>
          <tr>
            <td><div style={{width:'300px',height:'400px', backgroundColor:'#9986EE	'}}> 1</div></td>
            <td><div style={{width:'300px',height:'400px',backgroundColor:'#7878AA'}}> 1</div></td>
            <td><div style={{width:'300px',height:'400px',backgroundColor:'#75FFCA'}}> 1</div></td>
          </tr>
          <tr>
          <td><div style={{width:'300px',height:'400px', backgroundColor:'#89FB89	'}}> 1</div></td>
            <td><div style={{width:'300px',height:'400px',backgroundColor:'#57E9E1'}}> 1</div></td>
            <td><div style={{width:'300px',height:'400px',backgroundColor:'#FFD4DF'}}> 1</div></td>
          </tr>
        </table>
  
      </div>
      
    </center>
  </Slider>
  <button>
    다음페이지
  </button>

    </div>
  );
};

export default cu;