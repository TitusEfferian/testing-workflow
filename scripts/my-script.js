const fs = require('fs');
const message = process.env.MESSAGE;
const buffer = Buffer.from(message);
fs.writeFileSync('data.txt', buffer);
