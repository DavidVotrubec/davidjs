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
    const name = form['name'], 
        email = form['email'], 
        message = form['message'],
        submitButton = form.getElementsByTagName('button')[0];
        
    const fields = [name, email, message, submitButton];
    
    // basic validation
    if (!name.value || !email.value || !message.value){
        alert('Please fill all fields.');
        return;
    }
    
    const dataToSend = {
        name: name.value,
        email: email.value,
        message: message.value,
        timestamp: new Date().toJSON()
    };
    
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "/json-handler");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(dataToSend));
    
    // disable form fields when request is sent
    fields.forEach((field: HTMLElement) => {
       field.setAttribute('disabled', 'disabled');
    });
    
    xmlhttp.onload = function(xmlEvent){
        console.log(xmlEvent);
        console.log(xmlhttp.response);
        
        // re-enable form fields when request is finished
        fields.forEach((field: HTMLElement) => {
            field.removeAttribute('disabled');
        });
        
        // show status message
        const status = (<any>xmlEvent.currentTarget).status;
        var statusMessage; 
        if (status != 200) {
            statusMessage = form.getElementsByClassName('error-message')[0];
        }
        else {
            statusMessage = form.getElementsByClassName('success-message')[0];
        }
        
        removeClass(statusMessage, 'hidden');
    }
}