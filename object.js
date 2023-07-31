function Person(name, age) {
	this.name = name;
	this.age = age;
	this.introduce = function () {
		console.log(`Cześć nazywam się: ${this.name}`)
	}
}
const grzesiek = new Person('Grzesiek', 33);
grzesiek.introduce();
grzesiek.age = 16;
console.log(grzesiek.age);
const andrzej = new Person('Andrzej', 30);
andrzej.introduce();
console.log(andrzej.age);

function Person2(name, age) {
	this.name = name;
}
//const adam = Person2('Adam', 50);
//console.log(global.name)

const someObject= {
	name: 'John',
	age: 30,
	logger: function (lastName) {
		console.log(`My name is ${this.name} ${lastName}, age: ${this.age}`)
	}
};
someObject.logger('Uszatek');
someObject.logger.call({name: 'Grzesiek', age: 33}, 'Kowalski')
someObject.logger.apply({name: 'Grzesiek', age: 33}, ['Kowalski'])
const otherObject = someObject.logger.bind({name: 'Marek', age: 10})
otherObject('Miki')
otherObject('Miki 2')
otherObject('Miki 3')

const product = new Object();
product.name = 'TV'
product.price = 5000;
product.addToBasket = function () {
	console.log('Added');
}
const basket = Object.create({
	total: 500,
	pay: function () {
		console.log(`Paid: ${this.total}`)
	}
})
basket.pay();

const vehicle = Object.create({
	numberOfWheels: 2,
	speedUp: function () {
		console.log('Speed up');
	}
})

const car = Object.create(vehicle);
car.numberOfWheels = 4;
console.log(car.numberOfWheels)
console.log(vehicle.numberOfWheels)

const person1 = { name: 'Krzyś' }
const person2 = { name: 'Jaś', friend: person1 }
const clonedPerson2 = Object.assign({}, person2);
console.log(`Person1 name: ${person1.name}`)
console.log(`Person2 name: ${person2.name}`)
console.log(`clonedPerson2 name: ${clonedPerson2.name}`)
console.log(`clonedPerson2 friend name: ${clonedPerson2.friend.name}`)
person1.name = 'Marek';
console.log(`Person1 name: ${person1.name}`)
console.log(`clonedPerson2 friend name: ${clonedPerson2.friend.name}`)

const ski = {
	season: 'winter'
}
Object.freeze(ski);
ski.season = 'summer';
console.log(ski.season);
ski.someParam = 'param1';
console.log(ski.someParam);
console.log(Object.isFrozen(ski))
delete ski.season;
console.log(ski.season);
const windserfing = {
	season: 'summer'
}
Object.seal(windserfing);
console.log(windserfing.season);
windserfing.season = 'winter'
console.log(windserfing.season);
windserfing.someParam = 'param1';
console.log(windserfing.someParam);
delete windserfing.season;
console.log(windserfing.season);
console.log(Object.isSealed(windserfing));

const user = {
	role: 'Admin',
	username: 'admin',
	age: 26,
	email: 'test@mail.com'
}
Object.preventExtensions(user);

console.log(user.role);
user.role = 'User'
console.log(user.role);
user.someParam = 'param1';
console.log(user.someParam);
delete user.role;
console.log(user.role);
console.log(Object.isExtensible(user));
console.log(user.hasOwnProperty('username'));
console.log('username' in user);
console.log(user.role !== undefined);
console.log(Object.values(user));

console.log(Object.entries(user));

class Humans {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	
	introduce = function () {
		console.log(`Cześć nazywam się: ${this.name}`)
	}
}
class Adult extends Humans {
	buyBeer() {
		console.log('Buy')
	}
}

const somePerson = new Humans('Mirek', 41);
somePerson.introduce()
const adult = new Adult('Jan', 18);
adult.buyBeer();
adult.introduce();
adult.name = 'Piotr'
adult.introduce();