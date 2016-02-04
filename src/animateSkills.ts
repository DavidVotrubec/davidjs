/**
 * Animates the progress bars
 * - find all bars in given container
 * - read the 'data-level' attribute
 * - and increment the style:width one point a time until target value is reached
 */

function animateProgressBars(container: HTMLElement, progressBarClass: string = 'level-bar-inner', attributeName: string = 'data-level') {
    const bars = container.getElementsByClassName(progressBarClass);
    
    function animateBar(bar: HTMLElement) {
        const target = parseInt(bar.getAttribute(attributeName), 10);
        var isTargetReached = false;
        var currentValue = 0;
        
        var interval = setInterval(() => {
            if (isTargetReached) {
                clearInterval(interval);
                return;
            }
            
            bar.style.width = currentValue + '%';
            
            isTargetReached = currentValue >= target;
            
            currentValue++;
        }, 20);
    }
    
    Array.prototype.forEach.call(bars, (b) => animateBar(b));    
}
