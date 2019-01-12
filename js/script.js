// var headtitle = document.getElementById('title');
var cardDisplay = document.getElementsByTagName('card-display');
var myArray = [01,02,03,04,05,06,07,08,09,10];
// var allImages = array.map(card => '<img="/images/'+ card + '.jpg"/>' );

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffle(myArray);
console.log(myArray);

cardDisplay.innerHTML = shuffle(myArray);
// document.getElementById('title').textContent = 'sadasd';