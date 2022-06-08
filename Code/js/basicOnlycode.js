const root = document.getElementById('root');
let offset = 0;
let widthValue = root.offsetWidth;

// todo 휠 방향 조정
window.addEventListener('wheel', e => {
  offset += Math.sign(e.deltaY) * 30;
  if (offset < 0) {
    offset = 0;
  } else if (offset > widthValue- window.innerWidth) {
    offset = widthValue - window.innerWidth;
  }
  root.style.transform = `translateX(-${offset}px`;
});

// todo 메뉴바 
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
  let fadeIn = setInterval(function(){
    if(offset > 0){
      offset = offset-50;
      root.style.transform = `translateX(-${offset}px`;
    } else{
      clearInterval(fadeIn);
    }
  },0.1);
});

nav[0].addEventListener('click',function(){
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
});