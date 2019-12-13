// validate range in input and type 
function validateInput(valueInput) {

    if (!isNaN(valueInput) && valueInput >= 10 && valueInput <= 100) {
        getRandomNumbers(valueInput);
    } else {
        document.getElementById("inputNumber").focus();
        alert("Entrada inválida, digite um número entre 10 e 100.");
    }

}

// generate random number and add result to div
function getRandomNumbers(qtd) {

    var randomNumbers = []; // initializing array

    for (let index = 0; index < qtd; index++) {
        randomNumbers[index] = Math.round(Math.random() * 100); // adding random number generated to array
    }

    addContent(randomNumbers, "random");

    var sortedNumbers = randomNumbers.sort((a, b) => a-b);
    addContent(sortedNumbers, "sorted");

    var reverseSortedNumbers = randomNumbers.sort((a, b) => b-a);
    addContent(reverseSortedNumbers, "reverseSorted");

    var evenNumbers = randomNumbers.filter(num => num % 2 == 0 && num !== 0).sort((a, b) => b-a );
    addContent(evenNumbers, "even");

    var oddNumbers = randomNumbers.filter(num => num % 2 !== 0 && num !== 0).sort((a, b) => a-b);
    addContent(oddNumbers, "odd");

}

// add at result div, for each requisite: random, sorted, inverse sorted, odd and even
function addContent(numbers, nameDiv){
    var para = document.createElement("P");
    para.innerHTML = numbers;
    document.getElementById(nameDiv).appendChild(para);
}