let inputBox=document.querySelector(".inputField input");
let button=document.querySelector(".inputField button");
let taskList=document.querySelector(".listContainer");

button.addEventListener("click", function(){
    if(inputBox.value==""){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        taskList.append(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.append(span);
    }
    inputBox.value="";
    saveData(); 
})

taskList.addEventListener("click", function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showData(){
    taskList.innerHTML=localStorage.getItem("data");
}

showData();