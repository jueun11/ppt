const nav = Array.from(document.querySelectorAll('nav > ul > li'));document.querySelectorAll('nav > ul > li');
const title = document.getElementById('title');
// console.log(nav);
const PhotoFrames = document.getElementById('PhotoFrames').children;
//*각각의 액자 배열로 불러옴
let PhotoFramesArray = Array.from(PhotoFrames);
let i = 0;
// todo 마우스오버 이벤트
for(i=0; i<PhotoFrames.length; i++){
  PhotoFrames[i].addEventListener('mouseover',function(){
    this.children[1].style.display = "flex";
  });
  PhotoFrames[i].addEventListener('mouseout',function(){
    this.children[1].style.display = "none";
  });
}
//마우스 오버 이벤트 끝
//todo 클릭 이벤트
const page3bg = document.querySelector('#page3 > section:nth-child(1)');
const popups = document.getElementById('popups');
const esc = document.getElementById('esc');
const popup = document.querySelectorAll('.popup');
const codeBook = Array.from(document.getElementsByClassName('codeBook'));
const gitlink = ["https://github.com/jueun11/light-project","https://github.com/jueun11/fruit-project","https://github.com/jueun11/cafe"];
console.log(gitlink);



// const codeconfirm = (e) => {
//   let codebookResult = confirm("github로 이동합니다");
//       if(codebookResult){

//         //클릭한 페이지의 링크..배열순서 이용
//         window.open(gitlink[value]);
        
//       }
//       if(codebookResult){
//         //클릭한 페이지의 링크..배열순서 이용
//         window.open(gitlink[0]);
//       }
// }
// let timer = null;

function throttle(codeconfirm, wait) {
  // let waiting = ture;
  return function() {
    if(waiting) {
      codeconfirm();
      waiting = false;
      setTimeout(() => {
        waiting = true;
      },100);
    }
  }
}

let wait = true;

for(i=0; i<PhotoFrames.length; i++){
  PhotoFrames[i].addEventListener('click',function(){
    let value = PhotoFramesArray.indexOf(this);
    //*indexOf로 몇번째 인덱스인지 가져옴
    popups.style.display = "flex";
    page3bg.style.opacity = 0;
    popup[value].style.display = "flex";
    
    const codeconfirm = (e) => {
      console.log('책 누름');
      let codebookResult = confirm("github로 이동합니다");
      if(codebookResult){
        //클릭한 페이지의 링크..배열순서 이용
        window.open(gitlink[value]);
          }
        }
        
    codeBook[value].addEventListener("click",codeconfirm);
    
    esc.style.display = "block";
      esc.addEventListener('click',function(){
        popups.style.display = "none";
        popup[value].style.display = "none";
        page3bg.style.opacity = 1;
        codeBook[value].removeEventListener("click",codeconfirm);
        
      });
      for(i=0; i<nav.length; i++){
        nav[i].addEventListener('click',function(){
          codeBook[value].removeEventListener("click",codeconfirm);
        });
      }

      title.addEventListener('click',function(){
        codeBook[value].removeEventListener("click",codeconfirm);
      });
    });
}
console.log(nav);
//클릭이벤트끝
export {popups,page3bg,popup,esc};

