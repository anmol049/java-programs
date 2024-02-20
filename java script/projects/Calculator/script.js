const buttonInput = document.getElementsByClassName("button");
const operation = document.getElementById("operations");
const displaypad = document.getElementById("box-1");
for(let i=0;i<buttonInput.length;i++){
    buttonInput[i].addEventListener("click", ()=>{
        // console.log(buttonInput[i].innerHTML);
        if(buttonInput[i].innerHTML== document.getElementById("box-18").innerHTML){
            result();
        }
        else if(buttonInput[i].innerHTML==document.getElementById("box-2").innerHTML){
            clear();
        }
        else if(buttonInput[i].innerHTML==document.getElementById("box-3").innerHTML){
            deleteChar();
        }
        else{
            solve(buttonInput[i].innerHTML);
        }
    },true);
}

function solve(val){
    displaypad.value += val;
    console.log(displaypad.value);
}
function result(){
    var num1 = displaypad.value;
    var num2 = eval(num1);
    displaypad.value= num2;
    console.log(displaypad.value);

}
function clear(){
    displaypad.value="";
}
function deleteChar(){
    displaypad.value = displaypad.value.slice(0,-1);
}









// for(let i = 0 ;i<buttonInput.length;i++){
//     buttonInput[i].addEventListener("click" , (event) =>{
//         displaypad.value = buttonInput[i].innerHTML;
//         console.log(displaypad.value);
//         console.log(event);
//         displaypad.value = `${displaypad.value}${event.target.innerHTML}`;
        

//         const pressbuttonis = buttonInput[i].innerHTML;
//         console.log(`Button ${pressbuttonis} is pressed`);
//         displaypad.innerHTML = pressbuttonis;
//     });
// }
// let a = 
// document.getElementById("box-18").addEventListener("click",(a,b)=>{


// } 
// )