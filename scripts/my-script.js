const fs = require('fs');

// Write the updated contents of the file.
fs.writeFileSync('data.txt', process.env.MESSAGE);
