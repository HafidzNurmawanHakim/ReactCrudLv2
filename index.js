const express = require("express");
const app = express();

app.use(() => {
  console.log("hello");
  console.log("hell2");
});

app.listen(4000);
