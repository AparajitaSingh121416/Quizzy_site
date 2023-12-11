var button = document.getElementById("enter");
var input= document.getElementById("userinput");
var list = document.querySelector("ul");
button.addEventListener("click", function(){
    if(input.value.length >0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        input.value="";
    }
    
})
input.addEventListener("keydown", function(event){
    if(input.value.length > 0 && event.key === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        input.value="";
    }
    
})