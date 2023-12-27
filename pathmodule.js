const path = require('path');

const a = path.basename('C:\\temp\\myfile.html');
const a1 = path.dirname('C:\\temp\\myfile.html');
// Returns: 'C:\\temp\\myfile.html'
console.log(a)
console.log(a1)

const a3 = path.extname(__filename)

console.log(a3)