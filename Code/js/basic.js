import { popups,page3bg,popup,esc } from "./page3.js";
const root = document.getElementById('root');
let offset = 0;
let widthValue = root.offsetWidth;
//*widthValue 에 root의 가로 크기를 대입한다

const floor = document.getElementById('floor');
let floorValue = 0;
floor.style.height = `${floorValue}vh`;
let light = document.getElementById('light');

let opacityValue = 1;
const page1 = document.getElementById('page1');
const mainplace = document.querySelector('.container');
let placeValue = 10;
mainplace.style.perspectiveOrigin = `${placeValue}%`;
//*스크롤 방향 전환 
window.addEventListener('wheel', e => {
  offset += Math.sign(e.deltaY) * 30;
  //*deltaY는 스크롤 양을 의미한다. 스크롤 양에 *30한 숫자를 offset에 대입한다
  if (offset < 0) {
    offset = 0;
    //* 0으로 정의해주지않으면 페이지끝에서 스크롤 양 만큼 계속 쌓이게된다. 그래서 0아래로 가면 0에 머물게 해줘야함
  } else if (offset > widthValue- window.innerWidth) {
    offset = widthValue - window.innerWidth;
    //*else if - offset(스크롤 양*30)이 0보다 크면서도 / if - root의 가로크기 - window(전체창)의 가로폭 보다 스크롤양이 많을 경우. 무슨의미냐면 window의 크기는 한정된 페이지보다 작은 크기이다.
    //? offset이 윈도우와 root의 크기차이보다 클 수있나? offset은 스크롤 양 *30.. 30 60 정도
    //!해답 이전 if문은 처음 페이지에서 오버되지 않게 하는 역할이었다. else if는 끝에서 넘치지않게 하는 역할으로, root의 크기보다 스크롤이 넘어가지않게 넘어가면 다시 끝으로 재정의 해주는 것이다
  }
  root.style.transform = `translateX(-${offset}px`;
  //*translateX는 지정된 위치만큼 이동시키는 함수
  //*root 을 offset(스크롤양 *30)만큼 이동시칸다

  //todo 스크롤중 메뉴 색 변환
  if(offset > (page2LeftOffset-page2LeftOffset/3)){
    nav[0].style.color = "#D94B19";
  }
  if(offset > page2LeftOffset+(page2.offsetWidth/2)){
    nav[0].style.color = "#262626";
  }
  if(offset < (page2LeftOffset-page2LeftOffset/3)){
    nav[0].style.color = "#262626";
  }
  if(offset > page2LeftOffset+(page2.offsetWidth/3)){
    nav[1].style.color = "#D94B19";
  }
  if(offset > page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    nav[1].style.color = "#262626";
  }
  if(offset < page2LeftOffset+(page2.offsetWidth/2)){
    nav[1].style.color = "#262626";
  }

  if(offset > page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    nav[2].style.color = "#D94B19";
  }
  if(offset <  page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    nav[2].style.color = "#262626";
  }
  //!색 변환 끝


  //todo 스크롤위치에따른 배경 투시 변경
  // console.log(offset/15);
  // console.log(placeValue);
  // placeValue = 10;
  //*투시에 사용할 변수이다. 마지노선 60
  placeValue = 10 + (offset/10);
  mainplace.style.perspectiveOrigin = `${placeValue}%`;
  
  if(placeValue > 60) {
    placeValue = 60;
    mainplace.style.perspectiveOrigin = `${placeValue}%`;
  }

//todo page1투명도 조절
  if(offset > page2LeftOffset-(page2LeftOffset/2)-(page2LeftOffset/3)){
    let fadeInopacity = setInterval(function(){
      if(opacityValue > 0 ){
          opacityValue = opacityValue - 0.01;
          page1.style.opacity = opacityValue;
      }
      else {
        page1.style.opacity = 0;
        clearInterval(fadeInopacity);
      }
    },0.1);
  }

  if(offset < page2LeftOffset-(page2LeftOffset/2)-(page2LeftOffset/3)){
    let fadeInopacity = setInterval(function(){
      if(opacityValue < 1 ){
          opacityValue = opacityValue + 0.01;
          page1.style.opacity = opacityValue;
      }
      else {
        page1.style.opacity = 1;
        clearInterval(fadeInopacity);
      }
    },0.1);
  }
//투명도 조절 끝

//todo 복도 올라오는 액션

  if(offset > page2LeftOffset+(page2.offsetWidth/2) && offset < page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    let fadeInfloor = setInterval(function(){
      if(floorValue < 20 ){
          floorValue = floorValue+0.1;
          floor.style.height = `${floorValue}vh`;
      }
      else {
        floor.style.height = "20vh";
        clearInterval(fadeInfloor);
      }
    },60);
  }

  //다음페이지로 넘어감 계단 내려감
  if( offset > page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
    let fadeInfloor = setInterval(function(){
      if(floorValue > 0  ){
          floorValue = floorValue-1;
          floor.style.height = `${floorValue}vh`;
      } 
      else {
        clearInterval(fadeInfloor);
      }
    },60);
  }

  //이전페이지로 이동 계단 내려감
  if(offset < page2LeftOffset+(page2.offsetWidth/2)){
    let fadeInfloor = setInterval(function(){
      if(floorValue > 0  ){
          floorValue = floorValue-1;
          floor.style.height = `${floorValue}vh`;
      } 
      else {
        clearInterval(fadeInfloor);
      }
    },60);
  }

  //휠 동작중 전등 불 제어
  if(offset < page2LeftOffset-(page2LeftOffset/3)){
    light.style.opacity = 0;
    
  }
  if(offset > page2LeftOffset-(page2LeftOffset/3)){
    light.style.opacity = 1;
  }
});


// todo 메뉴바 
const nav = document.querySelectorAll('nav > ul > li');
Array.from(nav);
// console.log(nav);
//*nav를 배열로 바꿔줬다

const title = document.getElementById('title');
//*타이틀부분은 배열이 아니라서 따로 지정해줬다

const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
let page1leftOffset = 0;
let page2LeftOffset = page2.offsetLeft;
let page3leftOffset = page3.offsetLeft;
let page4leftOffset = page4.offsetLeft;
//*각 페이지별 왼쪽 좌표. 클릭시 이곳으로 이동하게한다


//*클릭한 메뉴만 색이 변하도록 한다
let i = 0;
for(i=0; i < nav.length; i++){
  nav[i].addEventListener('click',function(event){
    nav.forEach(function(element){
      element.style.color = "#262626";
    });
    //*forEach를 앞에 써서 일단 다 원색으로 돌리고
    event.target.style.color = "#D94B19";
    //*후에 event.target...클릭한 부분의 색만 바꿔준다
  });
}

//todo 메뉴 클릭에 따른 좌표이동 
//* this를 활용할 방법을 못찾았다. 메뉴는 많지 않으니 각 메뉴마다 이벤트를 넣는 방식을 선택
title.addEventListener('click',function(){
  opacityValue = 1;
  page1.style.opacity = opacityValue;
  //*팝업창 닫기
  popups.style.display = "none";
  page3bg.style.opacity = 1;
  for(i=0; i<popup.length; i++){
    popup[i].style.display = "none";
  }
  esc.style.display="none";
  let placeValue = 10;
  mainplace.style.perspectiveOrigin = `${placeValue}%`;
  let fadeIn = setInterval(function(){
    if(offset > 0){
      offset = offset-50;
      root.style.transform = `translateX(-${offset}px`;
    } else{
      clearInterval(fadeIn);
    }
  },0.1);

    //*계단 사라짐
    let fadeInfloor = setInterval(function(){
      if(floorValue > 0  ){
        floorValue = floorValue-5;
        floor.style.height = `${floorValue}vh`;
      } 
      else {
        floor.style.height = "0vh";
        clearInterval(fadeInfloor);
      }
    },0.1);
});

nav[0].addEventListener('click',function(){
  opacityValue = 0;
  page1.style.opacity = opacityValue;
  page3bg.style.opacity = 1;
  for(i=0; i<popup.length; i++){
    popup[i].style.display = "none";
  }
  esc.style.display="none";

  let fadeInleft = setInterval(function(){
    if(offset < page2LeftOffset){
      offset = offset+50;
      root.style.transform = `translateX(-${offset}px`;
    } else{
      clearInterval(fadeInleft);
    }
  },0.1);
  let fadeInright = setInterval(function(){
    if(offset > page2LeftOffset){
      offset = offset-50;
      root.style.transform = `translateX(-${offset}px`;
    } else{
      clearInterval(fadeInright);
    }
  },0.1);

  //*계단 사라짐
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

nav[1].addEventListener('click',function(){
  popups.style.display = "none";
  page3bg.style.opacity = 1;
  for(i=0; i<popup.length; i++){
    popup[i].style.display = "none";
  }
  esc.style.display="none";

  let fadeInleft = setInterval(function(){
    if(offset < page3leftOffset){
      offset = offset+50;
      root.style.transform = `translateX(-${offset}px`;
    } else{
      clearInterval(fadeInleft);
    }
  },0.1);
  let fadeInright = setInterval(function(){
    if(offset > page3leftOffset){
      offset = offset-50;
      root.style.transform = `translateX(-${offset}px`;
    } else{
      clearInterval(fadeInright);
    }
  },0.1);

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
});

nav[2].addEventListener('click',function(){
  popups.style.display = "none";
  page3bg.style.opacity = 1;
  for(i=0; i<popup.length; i++){
    popup[i].style.display = "none";
  }
  esc.style.display="none";
  let fadeInleft = setInterval(function(){
    if(offset < page4leftOffset){
      offset = offset+50;
      root.style.transform = `translateX(-${offset}px`;
    } else{
      clearInterval(fadeInleft);
    }
  },0.1);

    //*계단 사라짐
    let fadeInfloor = setInterval(function(){
      if(floorValue > 0  ){
        floorValue = floorValue-5;
        floor.style.height = `${floorValue}vh`;
      } 
      else {
        floor.style.height = "0vh";
        clearInterval(fadeInfloor);
      }
    },0.1);
});
//!메뉴 클릭 이벤트끝




