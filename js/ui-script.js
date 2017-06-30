GithubLookUp = function (){};
GithubLookUp.prototype.ajCall =function (){$.ajax({
    url: ('https://api.github.com/users/' + username + '?access_token=' + apiKey)
}).done(function (res) {
    console.log(res);
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
})}


