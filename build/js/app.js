(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '4daa22814b55e3b7c981e2e2bc4a311a68696bcd';
},{}],2:[function(require,module,exports){
GithubLookUp = function (){};
var username;
var apiKey = require('./../.env').apiKey;
GithubLookUp.prototype.ajCall =function (username){$.ajax({
    url: ('https://api.github.com/users/' + username + '?access_token='+ apiKey)
}).done(function (res) {
    $.ajax({
        url: 'https://api.github.com/users/'+username+'/repos',
        sort: 'created: asc',
        per_page: 5
    }).done(function (repos){
        $.each(repos, function (index, repo){
            console.log(repo);
        $('#repos').append(`
                    <div class='well'> 
                        <div class='row'>
                            <div class='col-md-7'>
                                <strong>${repo.name}<strong>: ${repo.description}
                            </div>
                            <div class='col-md-3'>
                                <span class="label label-default">Forks: ${repo.forks_count}</span>
                                <span class="label label-primary">Watchers: ${repo.watchers_count}</span>
                                <span class="label label-success">Stars: ${repo.stargazers_count}</span>
                            </div>
                            <div class='col-md-2'>
                            <a href='${repo.html_url}' target='_blank' class='btn btn-default'>Repo Page</a>
                            </div>
                        </div>
                    </div>

                    `);
                });
            }); 
$('#profile').html(`
<div class="row">
                <div class="col-md-3 text-center">
                    <img src="${res.avatar_url}" alt="github avatar here" class='img-responsive img-border'><br>
                    <a href="${res.html_url}" class="btn btn-warning" target="_blank">view profile</a>
                    <hr>
                    <div class="page-header">
                        <h4>User Bio</h4>
                    </div>
                    <div class="well">
                        <p class='lead'>${res.bio}</p>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                    <h3><label for="" class="label label-success">followers: ${res.followers}</label></h3>
                        </div>
                        <div class="col-md-6">
                        <h3><label for="" class="label label-success">following: ${res.following}</label></h3>  
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="page-header">
                        <h1 class='text-warning'>Github profile details for: ${res.name}</h1>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class='text-primary'>Name: </h3>${res.name}
                        </li>
                        <li class="list-group-item">
                            <h3 class='text-primary'>Email: </h3>${res.email}
                        </li>
                        <li class="list-group-item">
                            <h3 class='text-primary'>Location: </h3>${res.location}
                        </li>
                        <li class="list-group-item">
                            <h3 class='text-primary'>Public Repositories: </h3>${res.public_repos}
                        </li>
                        <li class="list-group-item">
                            <h3 class='text-primary'>Public Gists: </h3>${res.public_gists}
                        </li>
                    </ul>
                    <div class="row">
                        <div class="col-md-4">
                            <h3><label for="" class="label label-success">hireable: ${res.hireable}</label></h3>
                        </div>
                        <div class="col-md-4">
                            <h3><label for="" class="label label-success">company: ${res.company}</label></h3>
                        </div>
                        <div class="col-md-4">
                            <h3><label for="" class="label label-success">created at: ${res.created_at}</label></h3>
                        </div>
                    </div>  
                </div>
            </div>

`);
});};
exports.GithubLookUpModule = GithubLookUp;
},{"./../.env":1}],3:[function(require,module,exports){
var GithubLookUp = require('./../js/script.js').GithubLookUpModule;
var githubUserFinder = new GithubLookUp();
$(document).ready(function (){
    $('#userInput').on('keyup', function (event){
        username = event.target.value;
        githubUserFinder.ajCall(username);
    });
});
},{"./../js/script.js":2}]},{},[3]);
