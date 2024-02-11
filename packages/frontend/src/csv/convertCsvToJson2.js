import fs from "fs"
import * as Papa from "csv-parse";

const csv = fs.readFileSync('./Provider-Database-Hackathon-02102024.csv')

console.log(csv)

const data = Papa.parse(csv);

console.log({data})

/*
// Convert back to CSV
const csv = Papa.unparse(data);

// Parse local CSV file
Papa.parse(file, {
    complete: function(results) {
        console.log("Finished:", results.data);
    }
});

// Stream big file in worker thread
Papa.parse(bigFile, {
    worker: true,
    step: function(results) {
        console.log("Row:", results.data);
    }
});
*/
