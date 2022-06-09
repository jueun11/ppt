const PhotoFrames = document.getElementById('PhotoFrames').children;
console.log(PhotoFrames);

console.log(PhotoFrames);
//*각각의 액자 배열로 불러옴
let PhotoFramesArray = Array.from(PhotoFrames);
console.log(PhotoFramesArray);

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

for(i=0; i<PhotoFrames.length; i++){
  PhotoFrames[i].addEventListener('click',function(){
    console.log(this);
    let value = PhotoFramesArray.indexOf(this);
    console.log(value);
    //*indexOf로 몇번째 인덱스인지 가져옴
    popups.style.display = "flex";
    page3bg.style.opacity = 0;
    const popup = document.querySelectorAll('.popup');
    popup[value].style.display = "flex";
    const esc = document.getElementById('esc');
      esc.addEventListener('click',function(){
        popups.style.display = "none";
        popup[value].style.display = "none";
        page3bg.style.opacity = 1;
      });
  });
}
//클릭이벤트끝

