const fs = require('fs');
const message = process.env.MESSAGE;
const buffer = Buffer.from(String(message));
fs.writeFileSync('data.txt', buffer);
