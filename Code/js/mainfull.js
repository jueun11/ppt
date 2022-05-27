const container = document.querySelector('#root');
let offset = 0;




let perspectiveValue = 20;
const mainplace = document.querySelector('.container');
const mainplace2 = document.querySelector('.container2');
console.log(mainplace);
mainplace.style.perspectiveOrigin = `${perspectiveValue}%`;
  mainplace2.style.perspectiveOrigin = `${perspectiveValue}%`;
  console.log(offset);



widthValue = container.offsetWidth;
//내 브라우저의 넓이
console.log(widthValue);
window.addEventListener('wheel', e => {
  offset += Math.sign(e.deltaY) * 60;
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

  // console.log(window.pageXOffset);
  
  
  
  if(offset > 800) {
    perspectiveValue = 90;
  } else if(offset > 400) {
    perspectiveValue = 70;
  }
  if(offset < 200) {
    perspectiveValue = 20;

  }
  
  mainplace.style.perspectiveOrigin = `${perspectiveValue}%`;
  mainplace2.style.perspectiveOrigin = `${perspectiveValue}%`;
  console.log(offset);
});


//vw로 바꾸면 제대로 실행되지않음






