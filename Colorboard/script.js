const container = document.getElementById("container");

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var color = random_rgba();

const SQUARES = 5000;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        setColer(square);
    });

    square.addEventListener("mouseout", () => {
        removeColor(square);
    });

    container.appendChild(square);
}

function setColer(e) {
    const color = random_rgba();
    e.style.background = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
    e.style.background = "#1d1d1d";
    e.style.boxShadow = "0 0 2px #000";
}