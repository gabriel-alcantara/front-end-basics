// function validateInput(valueInput) {
//     var reg = new RegExp("^([1-8][0-9])|(9[0-9])|(100)$");
    
//     console.log('#', valueInput)
//     if (reg.test(valueInput)) {
//         console.log("Valid");
//         getRandomNumbers(validateInput);
//     } else {
//         console.log("invalid value");
//         document.getElementById("inputNumber").focus();
//     }

// }


var randomNumbers = []; 

function getRandomNumbers(qtd) {
    console.log('value inserted: ', qtd);

    randomNumbers = []; // zerando array
    // var ul = document.createElement("UL");

    for (let index = 0; index < qtd; index++) {
        
        // var li = document.createElement('LI');
        randomNumbers[index] = Math.round(Math.random() * 100);
        // li.appendChild(document.createTextNode(randomNumbers[index]));
        // ul.appendChild(li);
        // document.body.appendChild(ul);

    }

    var para = document.createElement("P");

    para.innerHTML = randomNumbers;                 
    document.body.appendChild(para);
    document.getElementById("random").appendChild(para);

    var para = document.createElement("P");   
    para.innerHTML = randomNumbers.sort();
    document.body.appendChild(para);
    document.getElementById("sorted").appendChild(para);

    var para = document.createElement("P");   
    para.innerHTML = randomNumbers.sort((a, b) => b-a );
    document.body.appendChild(para);
    document.getElementById("reverseSorted").appendChild(para);

    var para = document.createElement("P");   
    para.innerHTML = randomNumbers.filter(num => num % 2 == 0 && num !== 0).sort((a, b) => b-a );
    document.body.appendChild(para);
    document.getElementById("even").appendChild(para);

    var para = document.createElement("P");   
    para.innerHTML = randomNumbers.filter(num => num % 2 !== 0 && num !== 0).sort();
    document.body.appendChild(para);
    document.getElementById("odd").appendChild(para);


    console.log("qtd", randomNumbers);
}
