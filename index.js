let username = document.getElementById('username');
let address = document.getElementById('address');
let followers = document.getElementById('followers');
let followings= document.getElementById('followings');
let bio = document.getElementById('bio');
let createdAt = document.getElementById('createdAt');
let profileImg = document.getElementById('profileImg');
let profileCard = document.getElementById('profileCard');
let nouser = document.getElementById('noUser');
let noresult = document.getElementById('noresult');
let searchInput;



// // //api fetch
// fetch('https://api.github.com/users/abubakaransari14').
// then((profileData)=>{
//     return profileData.json();
// })
// .then((data)=>{
// console.log(data)
// })



function searchHere(event){
     searchInput = document.getElementById("search").value;
    // username = searchInput;
    // event.preventDefault();
    event.preventDefault();
    console.log("search working")
    console.log(searchInput);
    
fetch(`https://api.github.com/users/${searchInput}`).
then((profileData)=>{
    return profileData.json();
})
.then((data)=>{
console.log(data)
if(!data  || !searchInput){
    profileCard.style.display= 'none'; 
    nouser.style.display = 'block'

}else{  
    nouser.style.display = 'none'
    showProfile(data);
}
}).catch((error)=>{
    nouser.style.display = 'block';
    noresult.innerText = data.message;
    console.log(error)
})

}

function showProfile(data){
    profileCard.style.display= 'block';
    username.innerText = data.name;
    address.innerText = data.location;
    bio.innerText = data.bio;
    followers.innerText = data.followers;
    followings.innerText = data.following;
    profileImg.setAttribute('src',data.avatar_url);
    createdAt.innerText = new Date(data.created_at).toLocaleDateString();

}

function goToProgile(){
    // window.location
    const url = `https://github.com/${searchInput}`;
  window.open(url, "_blank");
}