const app = require("./app");

const { HOST_PORT } = process.env;

app.listen(HOST_PORT, () => {
  console.log("Connection successful");
});
