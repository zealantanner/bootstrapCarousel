let activeItem = 1
function change(x) {
    // document.getElementById(`slide3`).toggleClass('active')
    if(1 < activeItem + 1 && activeItem + 1 < 5) {
        $(`slide${activeItem}`).toggleClass('active');
    }
    else {
        console.log("nope")
    }
}
console.log(`slide${activeItem}`)