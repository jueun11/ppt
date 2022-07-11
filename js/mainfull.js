const container = document.querySelector('#root');
let offset = 0;




let perspectiveValue = 20;
const mainplace = document.querySelector('.container');
const mainplace2 = document.querySelector('.container2');
// console.log(mainplace);
mainplace.style.perspectiveOrigin = `${perspectiveValue}%`;
mainplace2.style.perspectiveOrigin = `${perspectiveValue}%`;
// console.log(offset);
//* 투시박스 조절


const nav = document.querySelectorAll('nav > ul > li');
Array.from(nav);
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
let page2LeftOffset = page2.offsetLeft;
let page3leftOffset = page3.offsetLeft;
let page4leftOffset = page4.offsetLeft;
//*각 페이지 좌표 구하기
const floor = document.getElementById('floor');
// console.log(floor);   

widthValue = container.offsetWidth;
//내 브라우저의 넓이
// console.log(widthValue);
let floorValue = 0;

floor.style.height = `${floorValue}vh`;



window.addEventListener('wheel', e => {
  offset += Math.sign(e.deltaY) * 30;
  //edltaY는 마우스휠 y축 스크롤 양
  //옆의 숫자가 높으면 더 많이 이동한다..y축 스크롤양만큼 이동인데 그걸 늘리니까
  // event.preventDefault();

  if (offset < 0) {
    offset = 0;
  } else if (offset > widthValue- window.innerWidth) {
    offset = widthValue - window.innerWidth;
    //숫자가 총 width값이다. 픽셀만 되는듯?
  }
  
  container.style.transform = `translateX(-${offset}px`;
  
  
  if(offset > 300) {
    perspectiveValue = 90;
  } else if(offset > 100) {
    perspectiveValue = 50;
  }
  if(offset < 100) {
    perspectiveValue = 20;

  }
  
  mainplace.style.perspectiveOrigin = `${perspectiveValue}%`;
  mainplace2.style.perspectiveOrigin = `${perspectiveValue}%`;
  // console.log(offset);

  if(offset > (page2LeftOffset-page2LeftOffset/2)){
    nav[0].style.color = "#D94B19";
  }
  if(offset > page2LeftOffset+(page2.offsetWidth/2)){
    // console.log('off');
    nav[0].style.color = "#262626";

  }
  if(offset < (page2LeftOffset-page2LeftOffset/2)){
    nav[0].style.color = "#262626";
  }
  // console.log(window.offsetLeft);

  if(offset > page2LeftOffset+(page2.offsetWidth/2)){
    // console.log('on');
    nav[1].style.color = "#D94B19";
    // nav.forEach(function(element){
    //   element.style.color = "#262626";
    // });
  }
  if(offset > page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    // console.log('off');
    nav[1].style.color = "#262626";
  }
  if(offset < page2LeftOffset+(page2.offsetWidth/2)){
    // console.log('off');
    nav[1].style.color = "#262626";
  }

  if(offset > page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    // console.log('off');
    nav[2].style.color = "#D94B19";
  }
  if(offset <  page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    // console.log('off');
    nav[2].style.color = "#262626";
  }

  //계단 액션

  //올라오는 조건
  if(offset > page2LeftOffset+(page2.offsetWidth/2) && offset < page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    let fadeInfloor = setInterval(function(){
      if(floorValue < 20 ){
          floorValue = floorValue+0.1;
          floor.style.height = `${floorValue}vh`;
          // console.log(floorValue);
      }
      else {
        floor.style.height = "20vh";
        clearInterval(fadeInfloor);

      }
    },60);
  }

  //다음페이지로 넘어감 계단 내려감
  if( offset > page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    // console.log('off');
    let fadeInfloor = setInterval(function(){
      if(floorValue > 0  ){
          // let floorValue = 0;
          floorValue = floorValue-1;
          floor.style.height = `${floorValue}vh`;
          // console.log(floorValue);
      } 
      else {
        // floor.style.height = "0vh";
        clearInterval(fadeInfloor);
      }
    },60);
  }

  //이전페이지로 이동 계단 내려감
  if(offset < page2LeftOffset+(page2.offsetWidth/2)){
    // console.log('off');
    let fadeInfloor = setInterval(function(){
      if(floorValue > 0  ){
          // let floorValue = 0;
          floorValue = floorValue-1;
          floor.style.height = `${floorValue}vh`;
          // console.log(floorValue);
      } 
      else {
        // floor.style.height = "0vh";
        clearInterval(fadeInfloor);
      }
    },60);
  }


  nav[1].addEventListener('click',function(){
    if(offset > page2LeftOffset+(page2.offsetWidth/2) && offset < page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
      let fadeInfloor = setInterval(function(){
        if(floorValue < 20 ){
            floorValue = floorValue+5;
            floor.style.height = `${floorValue}vh`;
            // console.log(floorValue);
          }
          else {
          floor.style.height = "20vh";
          clearInterval(fadeInfloor);
  
        }
      },0.1);
    }
  });


  //휠 동작중 전등 불 제어
if(offset < page2LeftOffset-(page2LeftOffset/4)){
  // console.log('불 꺼진다');
  let light = document.getElementById('light');
  light.style.opacity = 0;
  
}
if(offset > page2LeftOffset-(page2LeftOffset/4)){
  // console.log('불 들어온다');
  let light = document.getElementById('light');
  light.style.opacity = 1;
  
}


});


//페이지 이동 offset은 현재위치
nav[0].addEventListener('click',function(event){
  event.target.style.color = "#D94B19";
  // container.style.transform = `translateX(-${offset}px`;
  
  // console.log(offset);
  // offset = page2LeftOffset;
  // let moveValue = 0;
  // while (moveValue < 2){
    
    //   if(moveValue == 2){
      //     break;
      //   }
      //   moveValue += 1;
      // }
      let fadeIn = setInterval(function(page1move){
        
        //현재위치좌표가 2번째페이지(목표페이지)의 좌표보다 작다면
        if( offset < page2LeftOffset){
          // console.log(offset);
          offset = offset+50;
          //좌표수를 증가시킴
          // console.log(offset);
          container.style.transform = `translateX(-${offset}px`;
          //증가되는 좌표를 대입
          // for(offset = 0; offset < page2LeftOffset; offset+10){
            
            // }
            // event.stopImmediatePropagation(event);
            nav[0].removeEventListener('click',page1move);
            //콜백함수 지정하고 리무브이벤트리스너하기
            nav[1].addEventListener('click', page1move);
          //왜 안될까 형식을 잘 모르겟다
          //그런데, 이렇게하면 버튼이 일회용이 되는것이 아닌가
    } 
    else {
      clearInterval(fadeIn);
    }
    // if(offset >= page2LeftOffset){
    //   // break;
    // }
  },0.1);
  
  let fadeIn2 = setInterval(function(page1move){
    container.style.transform = `translateX(-${offset}px`;
    if( offset >= page2LeftOffset){
      // console.log(offset);
      offset = offset-50;
      // console.log(offset);
      // event.stopImmediatePropagation(event);
      nav[0].removeEventListener('click',page1move);
      nav[1].addEventListener('click', page1move);
    } 
    else {
      clearInterval(fadeIn2);
    }
  },0.1);
  container.scrollIntoView({ behavior: 'smooth' });
  const out = Array.from(nav).filter(nav => nav !== this);
  out.forEach(function(element){
    element.style.color = "#262626";
  });
  
  perspectiveValue = 90;
  mainplace.style.perspectiveOrigin = `${perspectiveValue}%`;
  mainplace2.style.perspectiveOrigin = `${perspectiveValue}%`;
  
  let fadeInfloor = setInterval(function(){
    if(floorValue > 0  ){
      // let floorValue = 0;
      floorValue = floorValue-5;
      floor.style.height = `${floorValue}vh`;
      // console.log(floorValue);
    } 
    else {
      floor.style.height = "0vh";
      clearInterval(fadeInfloor);
    }
  },0.1);
  
});

nav[1].addEventListener('click',function(event){
  event.target.style.color = "#D94B19";
  container.style.transform = `translateX(-${offset}px`;
  // offset = widthValue - window.innerWidth;
  // offset = page2LeftOffset;

  
  let fadeIn = setInterval(function(){
    if( offset < page3leftOffset){
      offset = offset+50;
      container.style.transform = `translateX(-${offset}px`;

      if(floorValue < 20 && offset > page2LeftOffset+(page2.offsetWidth/2) && offset < page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)) {
        floorValue = floorValue+5;
        floor.style.height = `${floorValue}vh`;
        // console.log(floorValue);
        // floor.style.height = "20vh";
    }
    else {
      clearInterval(fadeInfloor);
    }
      
    } 
    else {
      clearInterval(fadeIn);
    }
  },0.1);
  
  let fadeIn2 = setInterval(function(){
    if( offset >= page3leftOffset){
      // console.log(offset);
      offset = offset-50;
      // console.log(offset);
      
      container.style.transform = `translateX(-${offset}px`;
    } 
    else {
      clearInterval(fadeIn2);
    }
  },0.1);
  // console.log(offset);

  let fadeInfloor = setInterval(function(){
    if(floorValue < 20 ){
        floorValue = floorValue+5;
        floor.style.height = `${floorValue}vh`;
        console.log(floorValue);
    }
    else {
      floor.style.height = "20vh";
      clearInterval(fadeInfloor);

    }
  },1);

  
  const out = Array.from(nav).filter(nav => nav !== this);
  out.forEach(function(element){
    element.style.color = "#262626";
  });
});

nav[2].addEventListener('click',function(event){
  event.target.style.color = "#D94B19";
  const out = Array.from(nav).filter(nav => nav !== this);
  out.forEach(function(element){
    element.style.color = "#262626";
  });

  container.style.transform = `translateX(-${offset}px`;

  // offset = page2LeftOffset;
  
  let fadeIn = setInterval(function(){
    if( offset < page4leftOffset){
      offset = offset+50;
      container.style.transform = `translateX(-${offset}px`;
    } 
    else {
      clearInterval(fadeIn);
    }
  },0.1);
  
  let fadeIn2 = setInterval(function(){
    if( offset >= page4leftOffset){
      offset = offset-50;
      
      container.style.transform = `translateX(-${offset}px`;
    } 
    else {
      clearInterval(fadeIn2);
    }
  },0.1);

  let fadeInfloor = setInterval(function(){
    if(floorValue > 0  ){
        // let floorValue = 0;
        floorValue = floorValue-5;
        floor.style.height = `${floorValue}vh`;
        // console.log(floorValue);
    } 
    else {
      floor.style.height = "0vh";
      clearInterval(fadeInfloor);
    }
  },0.1);
});

const mainTitle = document.getElementById('title');

mainTitle.addEventListener('click',function(){
  nav.forEach(function(element){
    element.style.color = "#262626";
  });
  // event.target.style.color = "#D94B19";
  container.style.transform = `translateX(-${offset}px`;
  let fadeIn = setInterval(function(){
    if( 0 < offset){
      offset = offset-50;
      container.style.transform = `translateX(-${offset}px`;
    } 
    else {
      clearInterval(fadeIn);
    }
  },0.1);

  const out = Array.from(nav).filter(nav => nav !== this);
  out.forEach(function(element){
    element.style.color = "#262626";
  });

  perspectiveValue = 20;
  mainplace.style.perspectiveOrigin = `${perspectiveValue}%`;
  mainplace2.style.perspectiveOrigin = `${perspectiveValue}%`;

  let fadeInfloor = setInterval(function(){
    if(floorValue > 0  ){
        // let floorValue = 0;
        floorValue = floorValue-5;
        floor.style.height = `${floorValue}vh`;
        // console.log(floorValue);
    } 
    else {
      floor.style.height = "0vh";
      clearInterval(fadeInfloor);
    }
  },0.1);
});


// console.dir(page2);
//특정 영역에서 상단 바 색상 변경
//1. 그 영역에 도착하면 색상이 들어옴 
//- 왼쪽절대값
//2. 그 영역을 넘어가면 색상이 빠짐
//- 왼쪽 절대값 + 페이지의 길이
// console.log(offset);


//전등 불 제어
if(offset > page2LeftOffset){
  console.log('불 들어온다');
}








