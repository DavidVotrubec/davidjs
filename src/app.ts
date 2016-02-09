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

function goToContact() {
    const messageBox = document.getElementById('message');
    setTimeout(function() {
        messageBox.focus();    
    }, 250);    
}

function sendMessage() {
    const form = document.getElementsByName('contactForm')[0];
    const name = form['name'], email = form['email'], message = form['message'];
    
    // basic validation
    if (!name.value || !email.value || !message.value){
        alert('Please fill all fields.');
        return;
    }
}