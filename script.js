let arr=['#FF0000 ','#800080','#00FF00 ','#00FFFF ','#a52a2a ']
var i=0;
let body=document.querySelector('section')
let info=document.getElementById('info')
let h2=info.children[0]
function change(){
    body.style.background=arr[i];
    h2.innerHTML = `background color: ${arr[i]}`;    
    if(i>=4){
        i=0;
    }
    else i++;

}