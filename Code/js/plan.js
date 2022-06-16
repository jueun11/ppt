
const planpopup = document.getElementsByClassName('plans');
const planBox = Array.from(document.getElementsByClassName('planBox'));
const planBook = Array.from(document.getElementsByClassName('planBook'));
const plans = document.getElementsByClassName('plans')[0];
const planEsc = document.getElementsByClassName('planEsc')[0];
const plan = Array.from(document.getElementsByClassName('plan'));
const leftBtn = document.querySelector('.planLBtn');
const rightBtn = document.querySelector('.planRBtn');
let a = 0;
for(a = 0; a < planBook.length; a++){
  planBook[a].addEventListener('click',function(){
    console.log('plan 열림');
    plans.style.display = "flex";
    let value = planBook.indexOf(this);
    plan[value].style.display = "flex";

    //*창 닫기
    planEsc.addEventListener('click',function(){
      plans.style.display = "none";
      plan[value].style.display = "none";
      
      console.log('닫기');
      
      
    });
  });
}


leftBtn.addEventListener('click',function(){
  console.log('앞으로');
});
rightBtn.addEventListener('click',function(){
  console.log('뒤로');
});
