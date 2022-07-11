const container = document.querySelector('#root');
let offset = 0;
let perspectiveValue = 20;
const mainplace = document.querySelector('.container');
const mainplace2 = document.querySelector('.container2');
mainplace.style.perspectiveOrigin = `${perspectiveValue}%`;
mainplace2.style.perspectiveOrigin = `${perspectiveValue}%`;
const nav = document.querySelectorAll('nav > ul > li');
Array.from(nav);
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
let page2LeftOffset = page2.offsetLeft;
let page3leftOffset = page3.offsetLeft;
let page4leftOffset = page4.offsetLeft;
const floor = document.getElementById('floor');
widthValue = container.offsetWidth;
let floorValue = 0;
floor.style.height = `${floorValue}vh`;
window.addEventListener('wheel', e => {
  offset += Math.sign(e.deltaY) * 30;
  if (offset < 0) {
    offset = 0;
  } else if (offset > widthValue- window.innerWidth) {
    offset = widthValue - window.innerWidth;
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
  if(offset > (page2LeftOffset-page2LeftOffset/2)){
    nav[0].style.color = "#D94B19";
  }
  if(offset > page2LeftOffset+(page2.offsetWidth/2)){
    nav[0].style.color = "#262626";
  }
  if(offset < (page2LeftOffset-page2LeftOffset/2)){
    nav[0].style.color = "#262626";
  }
  if(offset > page2LeftOffset+(page2.offsetWidth/2)){
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
  nav[1].addEventListener('click',function(){
    if(offset > page2LeftOffset+(page2.offsetWidth/2) && offset < page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)){
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
    }
  });
if(offset < page2LeftOffset-(page2LeftOffset/4)){
  let light = document.getElementById('light');
  light.style.opacity = 0;
}
if(offset > page2LeftOffset-(page2LeftOffset/4)){
  let light = document.getElementById('light');
  light.style.opacity = 1;
}
});
nav[0].addEventListener('click',function(event){
  event.target.style.color = "#D94B19";
      let fadeIn = setInterval(function(page1move){
        if( offset < page2LeftOffset){
          offset = offset+50;
          container.style.transform = `translateX(-${offset}px`;
            nav[0].removeEventListener('click',page1move);
            nav[1].addEventListener('click', page1move);
    } 
    else {
      clearInterval(fadeIn);
    }
  },0.1);
  
  let fadeIn2 = setInterval(function(page1move){
    container.style.transform = `translateX(-${offset}px`;
    if( offset >= page2LeftOffset){
      offset = offset-50;
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
      floorValue = floorValue-5;
      floor.style.height = `${floorValue}vh`;
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
  let fadeIn = setInterval(function(){
    if( offset < page3leftOffset){
      offset = offset+50;
      container.style.transform = `translateX(-${offset}px`;
      if(floorValue < 20 && offset > page2LeftOffset+(page2.offsetWidth/2) && offset < page3leftOffset+(page3.offsetWidth/2)+(page3.offsetWidth/4)) {
        floorValue = floorValue+5;
        floor.style.height = `${floorValue}vh`;
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
      offset = offset-50;
      container.style.transform = `translateX(-${offset}px`;
    } 
    else {
      clearInterval(fadeIn2);
    }
  },0.1);
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
        floorValue = floorValue-5;
        floor.style.height = `${floorValue}vh`;
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
if(offset > page2LeftOffset){
  console.log('불 들어온다');
}








