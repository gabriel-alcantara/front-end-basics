// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//     alert(i);
//     i++;
// }

document.body.style.background = 'red';

setTimeout(() => document.body.style.background = '', 1000);

console.log(document.getElementById("inputNumber").value);

var randomNumbers = [];

function myFunc(valueInserted) {
    console.log('value inserted: ', valueInserted);
    for (let index = 0; index < valueInserted; index++) {
        // alert(Math.round(Math.random()*100));
        document.write(Math.round(Math.random() * 100) + " ");
    }
}