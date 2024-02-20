 async function fetchdata(){
 try{
  const loadingpart = document.getElementById("loading");
  const box = document.getElementById("box");
  box.style.display = "none";
  const res = await fetch("https://dummyjson.com/products/1");
  console.log(res);
  const jsondata =await res.json();
  console.log(jsondata);
  loadingpart.style.display = "none";
  box.style.display = "block";
  loaddata(jsondata);
  }
  catch(error){
    console.log(`Error: ${error}`);
  }
}
fetchdata();

function loaddata(jsondata){
                                     // destructuring of json data
  const {thumbnail,title,description} = jsondata;
  document.getElementById("img-data").src = thumbnail;
  document.getElementById("title-data").innerHTML =title;
  document.getElementById("desc-data").innerHTML =description;

  
    console.log("clicked");
    let i = 0;
      document.getElementById("img-data").addEventListener("click", ()=>{
        // while(i<5){
          if(i==0){
            document.getElementById("img-data").src = jsondata.images[0];
            console.log("clicked 0")
            // break;
          }
          else if(i==1){
            document.getElementById("img-data").src = jsondata.images[1];
            console.log("clicked 1");
            // break;
          }
          if(i==2){
            document.getElementById("img-data").src = jsondata.images[2];
            console.log("clicked 2");
            // break;
          }
          else if(i==3){
            document.getElementById("img-data").src = jsondata.images[3];
            console.log("clicked 3");
            // break;
          }
          else if(i==4){
            document.getElementById("img-data").src = jsondata.images[4];
            console.log("clicked 4");
            i=-1;
            // break;
          }

        // }
        i++;
      })     
}





let text = document.getElementById("button-text");
let possitveButton = document.getElementById("possitive-button");
let negativeButton = document.getElementById("negative-button");
count = 0;
possitveButton.addEventListener("click", ()=>{
  count+=1;
  console.log(count);
  possitveButton.style.backgroundColor = "red";
  updatetext(count);

})
negativeButton.addEventListener("click", ()=>{
  count-=1;
  if(count<0){
    alert("you dont have anything in your cart")
    count=0;
  }
  else{

    updatetext(count);
  }
})
function updatetext(count){
  text.innerHTML = count;
}



