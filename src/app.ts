/// <reference path="./_references.ts" />
//import typing = require('./simulateTyping');

document.addEventListener("DOMContentLoaded", function(event) {
    var text = "Hi, I am a web developer";
    
    // simulateTyping() returns a Promise
    simulateTyping(text, 'greetings').then(() => {
        
        var skillSet = document.getElementById('skillset'),
            shortBio = document.getElementById('short-bio'),
            contact = document.getElementById('contact'),
            skillsetWrapper = document.getElementsByClassName('skills-wrapper')[0];
        
        // TODO: Perform some CSS animations
        removeClass(skillSet, 'visuallyhidden');
        removeClass(shortBio, 'visuallyhidden');
        removeClass(contact, 'visuallyhidden');
        
        if (skillsetWrapper) {
            removeClass(skillsetWrapper, 'visuallyhidden');    
            
            animateProgressBars(skillSet);
        }
        
    });
    
});