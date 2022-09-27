var text = document.getElementById("text");
var new_dom = '';
var animation = 6;
for(let i=0; i<text.innerText.length; i++){
    new_dom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
   switch(i){
    case 62:
    case 84:
    case 109:
    case 128:
    case 163:
    case 184:
    case 221:
        new_dom += '<br>';

   }
}
text.innerHTML = new_dom;
var length = text.children.length;
console.log(length);
for(let i = 0; i < length; i++)
{
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}