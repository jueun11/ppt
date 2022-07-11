const page4Bg = document.getElementById('page4Bg');
let rootWidth = document.getElementById('root').offsetWidth;
let leftmagin = rootWidth - (page4Bg.offsetWidth);

page4Bg.style.left= leftmagin + "px";