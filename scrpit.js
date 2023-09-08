var btn=document.querySelector("#btn");
var result=document.querySelector("#result");
var counter=0;
result.innerHTML=counter;
var btnCounter=()=>{
    counter++;
    result.innerHTML=counter;
}
 btn.addEventListener("click",btnCounter)