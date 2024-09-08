export default str => str.split('').reverse().join('');

// Jest is only needed during development
// So it's better to install it in the devDependencies section
// $ npm i --save-dev jest

// To make Jest work correctly with the module system,
// add the following option to package.json
// "type": "module"