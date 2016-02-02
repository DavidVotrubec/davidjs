/// <reference path="./_references.ts" />
//import typing = require('./simulateTyping');

document.addEventListener("DOMContentLoaded", function(event) {
    var text = "Hi, my name's David and I am a web developer";
    
    // simulateTyping() returns a Promise
    simulateTyping(text, 'greetings').then(() => {
        
        var element = document.getElementById('skillset');
        
        // TODO: Perform some CSS animations
        removeClass(element, 'visuallyhidden');        
    });
    
});