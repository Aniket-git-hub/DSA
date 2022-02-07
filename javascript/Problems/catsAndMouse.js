"use strict";
function catAndMouse(x, y, z) {
    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);
    if (catA < catB)
        console.log("Cat A");
    else if (catA > catB)
        console.log("Cat B");
    else
        console.log("Mouse C");
}
