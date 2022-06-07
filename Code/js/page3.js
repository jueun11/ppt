const framesWall = document.querySelector('#page3 > section > article')
// console.dir(framesWall);

let photoFrame = document.createElement('div');
let photo = document.createElement('div');

// framesWall.style.backgroundColor = "red";

for(i=0; i<3; i++){
  if(i<3){
    let photoFrame = document.createElement('div');
    framesWall.append(photoFrame);

    
    //액자 스타일링
    photoFrame.style.backgroundColor = "#D94B19";
    photoFrame.style.width = "20vw";
    photoFrame.style.height = "45vh";
    photoFrame.style.padding = "2vh";

    //액자안에 사진
    let photo = document.createElement('div');
    photoFrame.append(photo);
    // console.log(photoFrame);

    //사진 임시 스타일링 나중에 사진넣기
    photo.style.backgroundColor = "#fff";
    photo.style.width = "100%"
    photo.style.height = "100%"

    //배열로 확인
    
    // console.log(photoFrame);

      photo.addEventListener('mouseover',function(event){
        // event.target.style.backgroundColor = "#fff";
        event.target.style.opacity = "0.7";
      });
      
      
      photo.addEventListener('mouseout',function(event){
        event.target.style.opacity = "1";
      
      });
  }
}
// 액자들의 부모는 framesWall 액자는 photoFrame

//변수로 만듬
let framesWallArray = Array.from(framesWall.children);
// console.log(framesWallArray);

// framesWallArray[0].addEventListener('click',function(event){
//   console.log('클릭');
// });

//length를 활용하여 항목이 추가되어도 따로 수정할 필요가 없게하였다
// for(i = 0; i < framesWallArray.length; i++){
//   framesWallArray[i].addEventListener('click',function(){
//     //이벤트 동작 확인용
//     console.log('클릭');
//     //클릭대상만 선택 this
//     this.style.backgroundColor = "blue";

//   });
// }

//작품클릭하면 기존꺼는 display none으로 가린다
const page31 = document.querySelector('#page3 > section:nth-child(1)');
const popup = document.getElementById('popup');
// page31.style.display = "none";

// photoFrame.addEventListener('click',function(){
//   console.log('액자클릭');
// });
console.log(framesWallArray);

for(i = 0; i < framesWallArray.length; i++){
  framesWallArray[i].addEventListener('click',function(){
    popup.style.display = "flex";
    // popup.style.paddingLeft = "10vw";
    // popup.style.position = "absolute";
    //옆에서 누르면 옆에서 나옴.. 윈도우 기준으로 해야할 것 같다
    
    
    // page31.style.display = "none";
    page31.style.opacity = 0;
    let photoValue = this;
    popup.append(photoValue);
    console.log(popup);
    console.dir(popup);
    let index = i;
    //창 닫기
    const esc = document.getElementById('esc');
    esc.addEventListener('click',function(){
      framesWall.append(photoValue);
      // framesWallArray[i] = photoValue;
      popup.style.display = "none";
      page31.style.opacity = 1;
      console.log(framesWallArray);
      
      
    });
  });
}


console.log(framesWall.children);



framesWallArray[1].style.backgroundColor="blue";
framesWallArray[2].style.backgroundColor="yellow";

