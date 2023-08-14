/*async function getUserDetails(userId) {
	try {
	const user = await getUser(userId);
	const permissions = await getPermissions(user)
	const orders = getOrders(user, permissions)
	const products = await getProducts(orders)
	console.log(products);
	}
	catch(error) {
		console.log(err);
	}
}*/

/*function getUserDetails(userId) {
	getUser(userId, function(user) {
		getPermissions(user, function(permissions) {
			getOrders(user, permissions, function(orders) {
				getProducts(orders, function(products) {
					console.log(products);
				});
			});
		});
	});
}*/

const fetchData = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error))
			.finally(() => console.log('Finally'));
	});
};

fetchData('https://jsonplaceholder.typicode.com/posts')
	.then((posts) => console.log(posts))
	.catch(() => {})
	
/*(async function () {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await response.json();
		console.log(posts);
	} catch (err) {
		console.log(err);
	}
})()*/

const promises = [
	new Promise(resolve => setTimeout(resolve, 5000, 'first')),
	new Promise(resolve => setTimeout(resolve, 2000, 'second')),
	new Promise((_, reject) => setTimeout(reject, 3000, 'third'))
];
//Promise.race(promises).then(result => console.log(result))
Promise.all(promises)
	.then(result => console.log(`Promise.all ${result}`))
	.catch((err) => console.log(err));