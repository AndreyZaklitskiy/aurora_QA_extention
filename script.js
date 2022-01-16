
const outputArea = document.querySelector('.main-page-number');
console.log(outputArea);
const extBlock = document.createElement('div');
extBlock.classList.add('qa-ext_res', 'hide');
extBlock.innerText('');
// extBlock.innerHTML('<span>{{total_qty}}</span>');
outputArea.append(extBlock);


function extReset() {
    const tr = document.querySelectorAll('tr');
    let result = 0;
    for(i=0; i<tr.length; i++) {
        const td = Number(tr[i].querySelector('td')[4].innerHTML);
        result += td;
    }
    extBlock.innerText = result;
    console.log(tr);
    console.log(result);
}
extReset();

/*
chrome.storage.local.get(['display'], result => {
    console.log(result);
    if(result.display) extBlock.classList.remove('hide');
});
chrome.storage.onChanged.addListener(function(changes, namespace) {
    extBlock.classList.toggle('hide');
});
document.addEventListener('keydown', function(event) {
    if(event.code === 'ArrowUp') {
        chrome.storage.local.set({display: extBlock.classList.contains('hide')});
    }
    if(event.code === 'ArrowDown') {
        extReset();
        console.log('+');
    }
});

function extReset() {
    const extTr = document.getElementsByTagName('tr');
    let extSum = 0;
    for(i=0; i<extTr.length; i++) {
        const extTd = Number(extTr[i].getElementsByTagName('td')[4].innerText);
        extSum += extTd;
    }
    extBlock.innerText = extSum;
    console.log(extTr);
    console.log(extSum);
}
extReset();
*/



// CLOCK!!!
/*
const clock = document.createElement('div');
clock.classList.add('clock_ext', 'hide');
setInterval(updateClock, 1000);
updateClock();
document.body.append(clock);
chrome.storage.local.get(['display'], result => {
    if(result.display) clock.classList.remove('hide');
});
chrome.storage.onChanged.addListener(function(changes, namespace) {
    clock.classList.toggle('hide');
});
document.addEventListener('keydown', function(event) {
    if(event.code === 'Enter') {
        chrome.storage.local.set({display: clock.classList.contains('hide')});
     
    }
});
function updateClock() {
    const date = new Date();
    const time = new Intl.DateTimeFormat('ru-Ru', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }).format(date);
    clock.innerText = time;
}

*/