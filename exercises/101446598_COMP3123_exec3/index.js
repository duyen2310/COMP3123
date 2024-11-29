var http = require("http");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise
let employees= require("./Employee");

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            const greet="<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(greet)
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format

            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

            // Convert the employee data to JSON and send it as the response
            res.end(JSON.stringify(employees));

        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            const names = employees.map(employee => employee.firstName + " "+employee.lastName);


            names.sort((a, b) => (a.name > b.name ? 1 : -1));

            res.end(JSON.stringify(names));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            let total_salary=0;
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            employees.forEach(employee => {
                total_salary+=employee.Salary
            });
            res.end("total_salary : "+JSON.stringify(total_salary));

    }
    else{
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})