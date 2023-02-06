const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;

// app.set("port", process.env.PORT || 3000);
const server = http.createServer(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

//server.listen(process.env.PORT || 3000);
