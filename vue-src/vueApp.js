const name = require('./name')

console.log("My name is " + name.name);

if (module.hot) {
	module.hot.accept();
}