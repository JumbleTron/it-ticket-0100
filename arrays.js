const array = [1,2,3,4,3,];
const emptyArray = [];
const array2 = new Array(10);
const array3 = Array(10);
const array4 = Array.of(1,2,4,3);
const array5 = Array.from(array3);
console.log(array2)
console.log(emptyArray)

console.log(array4[2]);
array4[4] = 'adsdad';

const typedArray = new Int8Array(1024);
const typedArray2 = new Uint8Array(1024);
const typedArray3 = new Float64Array(1024);
array5.push(5)
const removed = array5.pop()
console.log(removed);
array5.shift()

const someTab = [1,2,3];
someTab.unshift(0);
console.log(someTab);
console.log(array.slice(0, 3))
console.log(array.splice(0, 3))
console.log(array);
delete array[2];
array.length
array.push('adasd')

console.log(array.toLocaleString())
const arrays = [[1, [2]], [2, [3]], [3, [5]]];
console.log(arrays)
console.log(arrays.flat(2))

const toClear = [1,2,3,5];
//toClear = [];
//toClear.splice(0, toClear.length);
toClear.length = 0;
console.log(toClear)

const arrayForLoops = ['hello', 'in', 'javacript'];
const i = 5;
do {
	console.log(arrayForLoops[i])
} while (i < arrayForLoops.length)

let index = 0;
while (index < arrayForLoops.length) {
	console.log(arrayForLoops[index]);
	index++;
}
for (let j=0; index<arrayForLoops.length; j++) {
	console.log(arrayForLoops[j]);
}

const arrayForForeach = [-5, 0, 2, 1];
arrayForForeach.forEach((val, index) => {
	if (val >= 0) {
		console.log(`Item at: ${index} is: ${val}`)
		return;
	}
})
arrayForForeach.forEach((val, index) => {
	if (val >= 0) {
		console.log(`-------${val}-------`)
		arrayForForeach.length = 0;
	}
})

const arrayForMap = [1, 2, 3, 4];
const arrayAfterMap = arrayForMap.map((num) => num * 2)
console.log(arrayAfterMap);
const sum = arrayForMap.reduce((sum, val) => sum + val)
console.log(sum);
const filtered = arrayForMap.filter((num) => num%2 === 0)
console.log(filtered);

const exampleObject = { id: 5, name: 'Grzegorz'};
for (const key in exampleObject) {
	console.log(key, exampleObject[key]);
}
for (const val of arrayForLoops) {
	console.log(val);
}

const spreadArray = [1, 2, 3];
const spreadArray2 = [...spreadArray, 5, 6];
console.log(spreadArray2);

function sumNumbers(...args) {
	return args.reduce((sum, val) => sum + val)
}
console.log(sumNumbers(1,2,3,6,5,4,7,9,9,0))

const arrayI = [1,3,6,5]
const iterator = arrayI[Symbol.iterator]()
let next = iterator.next();
while (!next.done) {
	console.log('I: ' + next.value);
	next = iterator.next();
}

function* numberGenerator() {
	let num = 10;
	while (true) {
		yield num++;
	}
}
const numberIterator = numberGenerator();
console.log(numberIterator.next().value)
console.log(numberIterator.next().value)
console.log(numberIterator.next().value)
console.log(numberIterator.next().value)
console.log(numberIterator.next().value)
console.log(numberIterator.next().value)

const someMap = new Map();
someMap.set('key-1', 1);
someMap.set('key-1', 5);
someMap.set(true, 2);
someMap.set({id: 5}, 3);
console.log(someMap)
console.log(someMap.has('key-5'))
console.log(someMap.get('key-5'))
const someSet = new Set([5,2,1,3,2,5])
someSet.add(10);
console.log(someSet.values());

const someWeakMap = new WeakMap();
someWeakMap.set({ id: 5 }, 45);