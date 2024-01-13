// JS should receive the req and send res
const http = require("http"); // importing http module

http
  .createServer((req, res) => {
    console.log("Request Received");
    // setting res header 
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    switch (req.url) {
      case "/":
        res.writeHead(200, {
          "Content-Type": "text/plain",
        });
        res.write("Hit /users or /todos");
        break;

      case "/users":
        if(req.method === 'GET'){
          // we need to connect to db
          // execute db select query
          // from db get the updates and send it as response
          const users = [
            {
              name: "John",
              email: "j@k.com",
              phone: "12345647896897",
            },
            {
              name: "Arun",
              email: "a@b.com",
              phone: "56758754675",
            },
          ];
          res.write(JSON.stringify(users));
        } else {
          // we need to connect to db
          // execute db insert query 
          // from db get the update and send it as response
          const data = {
            id: 100, 
            message: 'Saved Successfully!'
          }
          res.write(JSON.stringify(data));
        }
       
        break;

      case "/todos":
        const todos = [
          {
            id: 1,
            title: "complete prereq",
            status: "completed",
          },
          {
            id: 2,
            title: "teach marble js",
            status: "not completed",
          },
        ];
        res.write(JSON.stringify(todos));
        break;
    }
    res.end();
  })
  .listen(3000, () => {
    console.log(`Server Started. Open http://localhost:3000`);
  });
