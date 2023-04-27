import React from 'react';
import './land.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const land = () => {

    
    const main = ()=> {
        window.location.href="/Main"
    }
    AOS.init({
        duration: 1200,
      })
      

       
    return (


        <div>
         <div class="item" data-aos="fade-up">1</div>
<div class="item" data-aos="fade-down">2</div>
<div class="item" data-aos="fade-right">3</div>
<div class="item" data-aos="fade-left">4</div>

<div class="item" data-aos="zoom-in">5</div>
<div class="item" data-aos="zoom-out">6</div>

<div class="item" data-aos="slide-up">7</div>

<div class="item" data-aos="flip-up">8</div>
<div class="item" data-aos="flip-down">9</div>
<div class="item" data-aos="flip-right">10</div>
<div class="item" data-aos="flip-left">11</div>

            랜딩 페이지 입니다.
            <button onClick={main}>
                넘어가기
            </button>
        </div>
    );
};


export default land;