const profilecard = document.getElementById("profile-card");
const containor = document.getElementById("containor")
const temp = document.getElementById("temp");
async function fetchapi(){
    const result = await fetch("https://dummyjson.com/users");
    const jsondata =await result.json();
    console.log(jsondata);
    let users = jsondata.users;
    console.log(users);
    clonecards(users);
}
function clonecards(users){
    users.forEach((user)=>{
        const cardclone = temp.content.cloneNode(true);
        console.log(cardclone);
        const image= cardclone.querySelector("#user-image");
        const username = cardclone.querySelector("#user-name");
        const email = cardclone.querySelector("#user-id");
        image.src = user.image;
        username.innerHTML = `${user.firstName}  ${user.lastName}`;
        email.innerHTML = user.email;
        containor.appendChild(cardclone);

    });
    // profilecard.style.display = "none";
}
// console.log(profilecard);

fetchapi();