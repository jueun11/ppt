
const planpopup = document.getElementsByClassName('plans');
const planBox = Array.from(document.getElementsByClassName('planBox'));
const planBook = Array.from(document.getElementsByClassName('planBook'));
const plans = document.getElementsByClassName('plans')[0];
const planEsc = document.getElementsByClassName('planEsc')[0];
const plan = Array.from(document.getElementsByClassName('plan'));
const leftBtn = document.querySelector('.planLBtn');
const rightBtn = document.querySelector('.planRBtn');
let a = 0;

// const codeBook = Array.from(document.getElementsByClassName('codeBook'));

// const gitlink = ["https://github.com/jueun11/light-project","https://github.com/jueun11/fruit-project",2];
// console.log(gitlink);



// addEventListener.codeBook[0]("click",function(){
//   let codebookResult = confirm("github로 이동합니다");
//   if(codebookResult){
//     //클릭한 페이지의 링크..배열순서 이용
//     window.open(gitlink[0]);
//   }
// });

for(a = 0; a < planBook.length; a++){
  planBook[a].addEventListener('click',function(){
    console.log('plan 열림');
    plans.style.display = "flex";
    let value = planBook.indexOf(this);
    plan[value].style.display = "flex";
    
    
    //todo 슬라이드 작동
    
    //* 클릭한 plan의 페이지들불러오기
    let planChildren = Array.from(plan[value].children);
    // console.log(planChildren);
    
    //*처음에는 무조건 첫번째 페이지를 보여주도록
    let i= 0;
    for(i=0; i< planChildren.length; i++){
      planChildren[i].style.display = "none";
    }
    planChildren[0].style.display = "flex";


      //*슬라이드 좌우 버튼
      const leftEvent = (e) => {
        planChildren.unshift(planChildren[planChildren.length-1]);
        planChildren.pop();
        // console.log('앞으로');
        // console.log(planChildren[0]);
          for(i=0; i< planChildren.length; i++){
            planChildren[i].style.display = "none";
          }
          planChildren[0].style.display = "flex";
        }
        const rightEvent = (e) => {
          planChildren.push(planChildren[0]);
          planChildren.shift();
          // console.log('뒤로');
          // console.log(planChildren[0]);
          for(i=0; i< planChildren.length; i++){
            planChildren[i].style.display = "none";
          }
          planChildren[0].style.display = "flex";
          
        }
        leftBtn.addEventListener('click',leftEvent);
        rightBtn.addEventListener('click',rightEvent);

      
    //*창 닫기
    
    const EscEvent = (e) => {
      plans.style.display = "none";
      plan[value].style.display = "none";
      console.log('닫기');
      //* 이벤트 여러번 실행방지 / 이벤트 제거
      leftBtn.removeEventListener('click',leftEvent);
      rightBtn.removeEventListener('click',rightEvent);
      planEsc.removeEventListener('click',EscEvent);
    }
    planEsc.addEventListener('click',EscEvent);
  });
}


// if(codebookResult){
//   //클릭한 페이지의 링크..배열순서 이용
//   window.open();
  
// }