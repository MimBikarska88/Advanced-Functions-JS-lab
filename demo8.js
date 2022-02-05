function area() {

    return Math.abs(this.x * this.y);

};

function vol() {

    return Math.abs(this.x * this.y * this.z);

};


function solve(area, vol, input) {
    let result = [];
    let coordinates = JSON.parse(input);
    coordinates.forEach(element => {

        let obj = {
            area: area.call(element),
            volume: vol.call(element),
        }
        result.push(obj);
    });
    return result;
}

/**
 * 
 * 
 * Input : solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`);
 * 

    solve(area, vol, `[

{"x":"10","y":"-22","z":"10"},

{"x":"47","y":"7","z":"-5"},

{"x":"55","y":"8","z":"0"},

{"x":"100","y":"100","z":"100"},

{"x":"55","y":"80","z":"250"}

]`);



 * 
 * 
 * Output : 
 *  [
 * 
 *  {area: 2, volume: 20}
 * 
    {area: 49, volume: 490}

    {area: 10, volume: 100}

    ]
 * 
 * 
 * [

  { area: 220, volume: 2200 },

  { area: 329, volume: 1645 },

  { area: 440, volume: 0 },

  { area: 10000, volume: 1000000 },

  { area: 4400, volume: 1100000 }

]
 * 
 */


function solution(num1) {
    return function(num2) {
        return num1 + num2;
    }
}


/*****
 * Simple example of CURRYING
 * 
 * Input : 
 * let add5 = solution(5);
    console.log(add5(2));

    let add7 = solution(7);
    console.log(add7(2));
    console.log(add7(3));   
 * 

    Expected Output : 
    7
    9
    10

 * 
 */
function currencyFormatter(separator, symbol, symbolFirst, value) {

    let result = Math.trunc(value) + separator;


    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) return symbol + ' ' + result;

    else return result + ' ' + symbol;

}

function createFormatter(separator, symbol, symbolFirst, formatter) {
    return function(value) {
        return formatter(separator, symbol, symbolFirst, value);
    }
}

// Input - just a simple example of how a high-order function works. The function currency Formatter was a given in the task itself

/*


let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));





Output :
$ 5345,00
$ 3,14
$ 2,71

*/
function FilterEmployees(data, criteria) {
    let counter = 0;
    let [property, propValue] = criteria.split('-');
    if (propValue === 'all') {
        JSON.parse(data).forEach(person => {
            console.log(`${counter}. ${person.first_name} ${person.last_name} - ${person.email}`);
            counter++;
        });
    } else {
        JSON.parse(data).filter(obj => obj[`${property}`] == propValue).forEach(person => {
            console.log(`${counter}. ${person.first_name} ${person.last_name} - ${person.email}`);
            counter++;
        });
    }


}

/* Input : 







FilterEmployees(`[{

    "id": "1",

    "first_name": "Ardine",

    "last_name": "Bassam",

    "email": "abassam0@cnn.com",

    "gender": "Female"

  }, {

    "id": "2",

    "first_name": "Kizzee",

    "last_name": "Jost",

    "email": "kjost1@forbes.com",

    "gender": "Female"

  },  

{

    "id": "3",

    "first_name": "Evanne",

    "last_name": "Maldin",

    "email": "emaldin2@hostgator.com",

    "gender": "Male"

  }]`,

    'gender-Female');


    Expected output : 
    
    
    0. Ardine Bassam - abassam0@cnn.com
    1. Kizzee Jost - kjost1@forbes.com

    
    */

function result() {
    let str = '';
    return {
        append: (str1) => str += str1,
        removeStart: (n) => str = str.slice(n),
        removeEnd: (n) => str = str.slice(0, -n),
        print: () => console.log(str),
    }
}


/*

INPUT : 



let firstZero = result();
let secondZero = result();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3)
secondZero.removeEnd(4)

firstZero.print();
secondZero.print();


Output : 

34
elloa


*/
function commandGenerator(command) {
    switch (command) {
        case 'add':
            return (myList, value) => myList.push(value);
        case 'remove':
            return (myList, value) => {
                for (let i = 0; i < myList.length; ++i) {
                    if (myList[i] == value) {
                        myList.splice(i, 1);
                    }
                }
            };
        case 'print':
            return (myList, value) => console.log(myList.join(' '));
    }
}

function solution(params) {
    let myList = [];
    for (let commandInfo of params) {
        let [command, value] = commandInfo.split(' ');
        let f = commandGenerator(command);
        f(myList, value);
    }





}
solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);