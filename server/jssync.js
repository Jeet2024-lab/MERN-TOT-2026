// setTimeout(()=>{
// console.log("Register here");
// },2000);
function register(){
    waitforfiveseconds(5000);
console.log("register Here ");
}
function sendEmail(){
    setTimeout(()=>{console.log("Send Email");},8000);

}
function login(){
console.log("Login here");
}

function getData(){
    setTimeout(() => {
        console.log("getData here");
    }, 4000);

}
function fetchData(){
    setTimeout(() => {
        console.log("fetchData here");
    }, 3000);

}
function displayData(){
console.log("displayData here");
}

function waitforfiveseconds(delay){
    const ms =Date.now()+delay;
    while(Date.now()<ms){}
}

register();
sendEmail();
login();
getData();
displayData();
fetchData();