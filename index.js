console.log('hey123');
getuser(1,(user)=>{
    console.log('user',user);
    getRepositories(user.gitHubUsername,(repos)=>{
        console.log('repos',repos);
    })
});
console.log('after');

function getuser(id,callback){
    setTimeout(()=>{
        console.log('reading a user from database....');
        callback({id:id,gitHubUsername:'mosh'});
    },2000);
}

function getRepositories(username,callback){
    setTimeout(()=>{
        console.log('calling Github repositories....');
        callback(['repo1','repo2','repo3']);
    },2000);
}