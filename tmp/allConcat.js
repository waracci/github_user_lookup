var GithubLookUp = require('./../js/script.js').GithubLookUpModule;
var githubUserFinder = new GithubLookUp();
$(document).ready(function (){
    $('#userInput').on('keyup', function (event){
        username = event.target.value;
        githubUserFinder.ajCall(username);
    });
});