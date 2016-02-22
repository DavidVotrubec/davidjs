/// <reference path="./_references.ts" />
//import typing = require('./simulateTyping');

document.addEventListener("DOMContentLoaded", function(event) {
    
    const isMobile = mobilecheck();
    const isTablet = mobileAndTabletcheck();
    
    if (isMobile || isTablet) {
        const body = document.getElementsByTagName('body')[0];
        
        if (isMobile) {
            addClass(body, 'mobile-device');    
        }
        
        if (isTablet) {
            addClass(body, 'tablet-device');    
        }        
    }
    
    var text = "Hi, I am a web developer";
    
    // simulateTyping() returns a Promise
    simulateTyping(text, 'greetings').then(() => {
        
        var skillSet = document.getElementById('skillset'),
            shortBio = document.getElementById('short-bio'),
            contact = document.getElementById('contact'),
            work = document.getElementById('work'),
            books = document.getElementById('books'),
            blogposts = document.getElementById('blogposts'),
            footer = document.getElementById('footer'),
            skillsetWrapper = document.getElementsByClassName('skills-wrapper')[0];
                
        [skillSet, shortBio, contact, work, books, blogposts, footer].forEach((domElement) => {
           removeClass(domElement, 'visuallyhidden'); 
        });
        
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

function validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
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
    
    if (!validateEmail(email.value)){
        alert('Please enter valid email.');
        return;
    }
    
    const dataToSend = {
        name: name.value,
        email: email.value,
        message: message.value,
        timestamp: new Date().toJSON()
    };
    
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "/sendemail.php");
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    //xmlhttp.setRequestHeader("Content-Type", "multipart/form-data");
    
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
        var statusMessage, theOtherMessage;
        
        if (status != 200) {
            statusMessage = form.getElementsByClassName('error-message')[0];
            theOtherMessage = form.getElementsByClassName('success-message')[0];
        }
        else {
            statusMessage = form.getElementsByClassName('success-message')[0];
            theOtherMessage = form.getElementsByClassName('error-message')[0];
        }
        
        removeClass(statusMessage, 'hidden');
        addClass(theOtherMessage, 'hidden');
    }
}