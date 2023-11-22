let button1=document.getElementById("button1");
let addedTask=document.getElementById("task");
let list=[];


// click eventlister to activate push()
button1.addEventListener("click",function(){
    list.push(addedTask.value);
    addedTask.value="";
    review(); 
 });
//creating the list and adding the delete button's function
function review(){
    let newOrder="";    // taken from stack overflow
   for (var i=0;i<list.length;i++){
    newOrder+="<li>"+list[i]+"<button class='cross'> "+" X "+" </button> "+"</li>";
   }
   let output = document.getElementById("output");
    output.innerHTML = newOrder;

   let remove=document.getElementsByClassName("cross");
   Array.from(remove).forEach(function(button){
    button.addEventListener("click",function(){
        let index=Array.from(remove).indexOf(this);
        delTask(index);
    });
});
};

function delTask(index){
    list.splice(index,1);
    review();
};