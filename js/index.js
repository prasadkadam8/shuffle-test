let mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


setTimeout(() => {
    arrageNumbers();
}, 500)

function arrageNumbers() {
    var wrapper = document.querySelector("#buttonarea");
    wrapper.innerHTML = '';
    mainArray.forEach((x) => {
        let item = document.createElement("div");
        var number = document.createTextNode(x);
        item.appendChild(number);
        wrapper.appendChild(item);
    })
}


function shuffleArray() {
    mainArray = shuffle(mainArray);
    arrageNumbers();
}

function sortArray() {
    mainArray = mainArray.sort();
    arrageNumbers();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}




