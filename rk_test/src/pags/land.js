import React from 'react';


const land = () => {

    
    const main = ()=> {
        window.location.href="/Main"
    }

       
    return (


        <div>
            랜딩 페이지 입니다.
            <button onClick={main}>
                넘어가기
            </button>
        </div>
    );
};

export default land;