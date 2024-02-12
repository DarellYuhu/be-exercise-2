const http = require("http");
const { data } = require("./members");
const { users } = require("./users");
const moment = require("moment");

const PORT = 3010;
const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const url = req.url;

  if (url === "/") {
    res.write("This is home page");
  }

  if (url === "/about") {
    res.write(
      JSON.stringify({
        status: "Success",
        message: "Response success",
        description: "Exerscise #3",
        date: moment(),
        data,
      })
    );
  }

  if (url === "/users") {
    res.write(JSON.stringify(users));
  }
  res.end();
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}: ${new Date()}`);
});
