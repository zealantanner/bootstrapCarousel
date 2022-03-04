function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function movement(x) {
    $('#myCarousel').carousel('pause')
    for(let i = 0; i < 50; i++) {
        await sleep(i);
    }
    $('#myCarousel').carousel('cycle')
}

function closeWin(w = self) {
    w.close()
}
function getRidOf(x) {
    $(`${x}`).remove()
}

async function typeFast(element, time1, time2, message, time3, actuallyGoodbye = false) {
    document.querySelector(element).innerHTML = ``;
    let messageArr = Array.from(message)
    for(let h = 0; h < time1; h++) {
        await sleep(h);
    }
    for(let i = 0; i < messageArr.length; i++) {
        document.querySelector(element).innerHTML += messageArr[i];
        for(let j = 0; j < time2/messageArr.length; j++) {
            await sleep(j);
        }
    }
    for(let j = 0; j < time3; j++) {
        await sleep(j);
    }
    if (actuallyGoodbye) {
        closeWin()
    }
}
async function openWin() {
    window.open('notIndex.html', '_blank', 'titlebar=no')
    for(let i = 0; i < 20; i++) {
        await sleep(i);
    }
    document.getElementById('spookButton').innerHTML = `Haha!<br>Spooked ya!`
}