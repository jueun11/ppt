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
  }
}
// 액자들의 부모는 framesWall 액자는 photoFrame

//변수로 만듬
framesWallArray = Array.from(framesWall.children);
console.log(framesWallArray);

// framesWallArray[0].addEventListener('click',function(event){
//   console.log('클릭');
// });

//length를 활용하여 항목이 추가되어도 따로 수정할 필요가 없게하였다
for(i = 0; i < framesWallArray.length; i++){
  framesWallArray[i].addEventListener('click',function(){
    //이벤트 동작 확인용
    console.log('클릭');
    //클릭대상만 선택 this
    this.style.backgroundColor = "blue";
  });
}