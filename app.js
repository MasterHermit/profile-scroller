const data=[
    {
        name:'amit sahoo',
        age:'20',
        gender:'male',
        lookingfor:'female',
        location:'anugul',
        image:'https://randomuser.me/api/portraits/men/69.jpg'
    },
    {
        name:'bhoota',
        age:'20',
        gender:'male',
        lookingfor:'female',
        location:'khorda',
        image:'https://randomuser.me/api/portraits/men/19.jpg'
    },
    {
        name:'barsha',
        age:'20',
        gender:'female',
        lookingfor:'female',
        location:'jagatsingh put',
        image:'https://randomuser.me/api/portraits/women/69.jpg'
    }
];

const profile=profileIterartor(data);
profileDisplay();
document.getElementById('next').addEventListener('click',profileDisplay);
function profileDisplay(){
    const currentProfile=profile.next().value;
    if(currentProfile !== undefined){   document.getElementById('imageDisplay').innerHTML=`
       <img src="${currentProfile.image}">
   
       
       `
       document.getElementById('profileDisplay').innerHTML =`
       <ul class="list-group>
       <li class="list-group-item">Name: ${currentProfile.name}</li>
       <li class="list-group-item">Age: ${currentProfile.age}</li>
       <li class="list-group-item">gender: ${currentProfile.gender}</li>
       <li class="list-group-item">looking for: ${currentProfile.lookingfor}</li>
       <li class="list-group-item">location: ${currentProfile.location}</li>
       </ul>
       
       `}else{
           window.location.reload();
       }
   
   
}
  


function profileIterartor(profiles){
    let index=0;
    return {
        next:function(){
            return index<profiles.length ? 
            {value:profiles[index++],done:false} : 
            {done:true}
        }
    }
}