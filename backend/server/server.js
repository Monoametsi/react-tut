const dotenv = require('dotenv');
const path = require('path');
const dirname = __dirname.slice(0, __dirname.search('server'));

dotenv.config({ path: path.join(dirname, '.env')})

const PORT = process.env.PORT;

console.log(PORT);