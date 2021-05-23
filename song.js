var songs=new Array("YES OR YES","喜欢你","富士山下","WHAT IS LOVE","雨爱","兜圈");
var i=0;

function next(){
  i++;
  if(i>5){
    i=0;
    audio1.src=i+".mp3";
  }
  document.getElementById("audio1").src=i+".mp3";
  document.getElementById("result").style.visibility="hidden";
  document.getElementById("Answer").value="";

}
function ansVerify(){
  x=document.getElementById("Answer").value;
  if(x===songs[i]||(i===2&&x==="爱情转移")){
    text="correct";
  }else{
    text="wrong";
}

document.getElementById("result").innerHTML=text;
document.getElementById("result").style.visibility="visible";
}
