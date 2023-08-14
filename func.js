function sum(firstNumber, secondNumber) { //header
	if (secondNumber > firstNumber) {
		throw new Error();
	}
	
	return secondNumber + firstNumber;
}
const tab = [1,2,3,4];
const slicedTab = tab.slice(1,2);
console.log(`tab: ${tab}`)
console.log(`sliced: ${slicedTab}`)

const pow = (x) => x * x;
const pow2 = x => x * x;
const evenNumbers = (param1, param2) => {
	if (param1 !== param2) {
		throw new Error()
	}
	
	return param1;
}
console.log(tab);
console.log(evenNumbers);

const Book = function (name) {
	this.name = name;
}

const BookArrow = name => this.name = name;
const javaScriptBook = new Book('test');
const javaScriptBookArrow = BookArrow('test');

const add = x => y => console.log(x + y);
const add100 = add(100);
console.log(typeof add100)
add100(50) //150

function func2(x, y) {
	console.log(x + y);
}
function func1(x) {
	func2(x, 10);
}
func1(5)

/*(function () {
	var someNumber = 5484n;
	function isBigInt(number) {
		if (typeof number === 'bigint') {
			console.log('Bigint')
		}
	}
	isBigInt(someNumber)
})();*/

/*setTimeout(function () {
	console.log('Alert after 1 sec.');
}, 0)*/

/*let counter = 0;
const intervalId = setInterval(function () {
	console.log(`Counter value: ${++counter}`);
	if (counter < 5) {
		clearInterval(intervalId);
    }
}, 1000)

setTimeout(function () {
	clearInterval(intervalId);
}, 5000)*/

console.log(1)
setTimeout(() => console.log(2), 0)
console.log(5)