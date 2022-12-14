var path = require("path");

console.log(`normalize: ${path.normalize('/')}`);
console.log(`normalize: ${path.normalize('/..')}`);
console.log(`normalize: ${path.normalize('/../..')}`);

console.log('join path: ' + path.join('/', 'node', 'projects'));
console.log(`resolve: ${path.dirname('nodejs')}`);
console.log(`basename: ${path.basename('nodejs')}`);
console.log(`extname: ${path.extname('fileStats.html')}`);