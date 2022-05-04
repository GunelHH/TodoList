const input=document.getElementById("input");
const button=document.querySelector("button");
const ul=document.querySelector("#ul");

button.addEventListener("click",function(e){
    e.preventDefault();
  const li= document.createElement("li");
  li.innerHTML=input.value;
  ul.appendChild(li);
  li.classList.add("style");

})