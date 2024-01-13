// JS should receive the req and send res
const http = require("http"); // importing http module

http
  .createServer((req, res) => {
    console.log("Request Received");
    // console.log(req); // req object
    console.log(req.url); // what url requested
    console.log(req.method); // over what http method

    switch (req.url) {
      case "/":
        // Let's prepare the response
        res.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>Home Page</title>
          </head>
          <body>
            <header>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </header>
            <h1>Welcome to My Home Page</h1>
          </body>
          </html>
        `);
        break;

      case "/about":
        res.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>About Page</title>
          </head>
          <body>
            <header>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </header>
            <h1>Welcome to About Page</h1>
          </body>
          </html>
        `);
        break;

      case "/contact":
        res.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>Contact Page</title>
          </head>
          <body>
            <header>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </header>
            <h1>Welcome to Contact Page</h1>
          </body>
          </html>
        `);
        break;

      default:
        res.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>404 | Page Not Found</title>
          </head>
          <body>
            <h1>404 | Page Not Found</h1>
          </body>
          </html>
        `);
        break;
    }

    res.end(); // sending the response
  })
  .listen(3000, () => {
    console.log(`Server Started. Open http://localhost:3000`);
  });
