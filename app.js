'https://api.github.com/users/';

const inputE = document.getElementById('input');
const buttonE = document.getElementById('button');
const containerE = document.getElementById('user_container');
let user = null;
const Error_MSG = {
    404: "Not found!",
    500: "Server is unavailable!",
};
const github = new GitHub();
buttonE.addEventListener('click', onFind);

inputE.value = 'bardankl';
inputE.focus();
function onFind(e) {
    github.getUser(inputE.value).then((u) => {        
        user = u;
        console.log(user)
        renderUser(user);  
        inputE.value = '';             
    }).catch((e) => {
        renderError(e);
    })
}
function renderUser(data){
    containerE.innerHTML = 
        `<div class="user-foto">
            <img src="${data.avatar_url}">
        </div>
        <div class="user-data">
            <div> Login : ${data.login}</div>
            <div> Repositories : ${data.public_repos}</div>
            <div> followers : ${data.followers}</div>
            <div> following : ${data.following}</div>
        </div>`;
}
function renderError(errorCode){
    containerE.innerHTML = 
    `<div class="error">${Error_MSG[errorCode]}</div>`;
}