console.log('Loaded!');
//change the text
var element=document.getElementbyId('main-text');
element.innerHtml='New Value';

//move the image
var img=document.getElementbyId('madi');
var marginLeft=0;
function moveRight()
{marginLeft=marginLeft+10;
img.style.marginLeft=marginLeft +'px';
}
img.onclick=function (){
    var interval=setInterval(moveRight,100)
    ;
    
};