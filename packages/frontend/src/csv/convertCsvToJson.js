const fs = require('fs');
const csv = require('csv-parser');
const results = [];

fs.createReadStream('../../Provider Database Hackathon 02102024.csv') // Replace 'path/to/your/input.csv' with your CSV file's actual path
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results); // Outputs the parsed JSON to the console
        // Optionally, write the JSON to a file
        fs.writeFileSync('output.json', JSON.stringify(results, null, 2));
    });
