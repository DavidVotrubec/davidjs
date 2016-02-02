//export module general {
    
    //export function simulateTyping(textToType: string, elementId: string) {
    function simulateTyping(textToType: string, elementId: string) {  
        /**
         * Simulate user typing in a DOM element
         * Because this is just a simulated typing, I do not want the user to mess with it.
         * Therefore not textarea is expected but rather a <div> or <span> element
         * 
         * Inspired by discussion in http://stackoverflow.com/questions/23688149/simulate-the-look-of-typing-not-the-actual-keypresses-in-javascript
         * 
         * Returns a Promise
         */
                
        var domElement : HTMLElement = document.getElementById(elementId);
        
        var promise = new Promise((onSuccessFn, onErrorfn) => {            
            typeChar(onSuccessFn, onErrorfn);
        });                
    
        var currentCharIndex = 0;
        var timeout = null;
        
        function typeChar(onSuccessFn, onErrorfn){
            if (currentCharIndex >= textToType.length) {
                
                onSuccessFn();
                clearTimeout(timeout);  
                return;
            }
                
            var char = textToType[currentCharIndex];
            
            domElement.innerHTML = domElement.innerHTML + (char || '');
            
            currentCharIndex ++;
            var rand = Math.floor(Math.random() * (100)) + 140;
            timeout = setTimeout(() => typeChar(onSuccessFn, onErrorfn), rand);
        } 
        
        return promise;
    }

//}

