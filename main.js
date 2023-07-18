//console.log(variable);
console.log('Hello world!');
const variable = 1;

const someFunc = () => {
	const otherVar = 'addsasd';
	console.log(variable);
}
const someNum = 500;
const someNum1 = 500n;
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991
const sym1 = Symbol('sym1')
const sym2 = Symbol('sym1')
console.log(sym1 === sym2);

console.log(0.1 + 0.2 === 0.3) //0.30000000000000004
console.log(Math.abs((.1 + .2) - .3) < Number.EPSILON);
const hexNumber = 0xff;
const name = 'Piotr';
console.log(`czesc jestem ${name} mam na nazwiskoddd`)
console.log('Czesc jestem ' + name + 'adsdsd');

console.log(typeof Number.NaN)
console.log('auto ' + 12);
console.log('auto ' - 12);

const nan1 = 'auto ' - 12;
const nan2 = 'auto ' - 12;
console.log(nan1 === nan2)
console.log(Number.isNaN('abc' + 12));
console.log('equal', Math.abs((1000.1 + 1000.2) - 2000.3) < Number.EPSILON);

const regex2 = /j/g;
let str = 'adsdja323dja';
let match2;
let indices = [];

while ((match2 = regex2.exec(str)) !== null) {
	indices.push(match2.index);
}

console.log(indices);
const con = 5 > 4 ? 'ads' : 'asds';

if (!'') {
	console.log('empty string')
}
if (!NaN) {
	console.log('empty string')
}
if (!undefined) {
	console.log('empty string')
}