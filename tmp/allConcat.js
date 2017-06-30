var GithubLookUp = require('./../js/script.js').GithubLookUpModule;
var githubUserFinder = new GithubLookUp();
$(document).ready(function (){
    $('#userInput').on('keyup', function (event){
        console.log(event.target.value);
        username = event.target.value;
        githubUserFinder.ajCall(username);
    });
});