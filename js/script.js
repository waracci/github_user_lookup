var apiKey = '4daa22814b55e3b7c981e2e2bc4a311a68696bcd';

var username;
var meth = new GetLog();
$(document).ready(function (){
    $('#userInput').on('keyup', function (event){
        console.log(event.target.value);
        username = event.target.value;
        meth.ajCall();
    });
});