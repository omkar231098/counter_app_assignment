

let count = 0;
let autoIncrement = false;
let interval;

function increment() {
    if (count < 98) {
        count++;
        document.getElementById('counter').innerText = count;
    }
}

function decrement() {
    if (count > 0) {
        count--;
        document.getElementById('counter').innerText = count;
    }
}

function resetCounter() {
    count = 0;
    document.getElementById('counter').innerText = count;
    document.getElementById('autoBtn').disabled = false;
    clearInterval(interval);
    autoIncrement = false;
    document.getElementById('autoBtn').innerText = 'Enable Auto Increment';
}

function toggle() {
    if (autoIncrement) {
        clearInterval(interval);
        document.getElementById('autoBtn').innerText = 'Enable Auto Increment';
     
        
    } else {
        interval = setInterval(() => {
            if (count < 98) {
                increment();
            } else {
                clearInterval(interval);
                document.getElementById('autoBtn').disabled = true;
            }
        }, 1100);
        document.getElementById('autoBtn').innerText = 'Disable Auto Increment';
    
    }
    autoIncrement = !autoIncrement;
}