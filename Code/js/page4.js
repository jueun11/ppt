const page4Bg = document.getElementById('page4Bg');
let rootWidth = document.getElementById('root').offsetWidth;
console.log(rootWidth);
console.log(page4Bg.offsetWidth);
let leftmagin = rootWidth - (page4Bg.offsetWidth);
console.log(leftmagin);

page4Bg.style.left= leftmagin + "px";
console.dir(page4Bg);