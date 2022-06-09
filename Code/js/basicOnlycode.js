const root = document.getElementById('root');
let offset = 0;
let widthValue = root.offsetWidth;
const floor = document.getElementById('floor');
let floorValue = 0;
floor.style.height = `${floorValue}vh`;
let light = document.getElementById('light');
let opacityValue = 1;
const page1 = document.getElementById('page1');
const mainplace = document.querySelector('.container');
let placeValue = 10;
mainplace.style.perspectiveOrigin = `${placeValue}%`;
window.addEventListener('wheel', e => {
  offset += Math.sign(e.deltaY) * 30;
  if (offset < 0) {
    offset = 0;
  } else if (offset > widthValue- window.innerWidth) {
    offset = widthValue - window.innerWidth;
  }
  root.style.transform = `translateX(-${offset}px`;
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
  placeValue = 10 + (offset/10);
  mainplace.style.perspectiveOrigin = `${placeValue}%`;
  if(placeValue > 60) {
    placeValue = 60;
    mainplace.style.perspectiveOrigin = `${placeValue}%`;
  }
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
  if(offset < page2LeftOffset-(page2LeftOffset/3)){
    light.style.opacity = 0;
    
  }
  if(offset > page2LeftOffset-(page2LeftOffset/3)){
    light.style.opacity = 1;
  }
});
const nav = document.querySelectorAll('nav > ul > li');
Array.from(nav);
const title = document.getElementById('title');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
let page1leftOffset = 0;
let page2LeftOffset = page2.offsetLeft;
let page3leftOffset = page3.offsetLeft;
let page4leftOffset = page4.offsetLeft;
for(i=0; i < nav.length; i++){
  nav[i].addEventListener('click',function(event){
    nav.forEach(function(element){
      element.style.color = "blue";
    });
    event.target.style.color = "red";
  });
}
title.addEventListener('click',function(){
  opacityValue = 1;
  page1.style.opacity = opacityValue;
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
        }
        else {
        floor.style.height = "20vh";
        clearInterval(fadeInfloor);
      }
    },0.1);
});
nav[2].addEventListener('click',function(){
  let fadeInleft = setInterval(function(){
    if(offset < page4leftOffset){
      offset = offset+50;
      root.style.transform = `translateX(-${offset}px`;
    } else{
      clearInterval(fadeInleft);
    }
  },0.1);
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