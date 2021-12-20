const express = require("express");

const app = express();

app.get('/', (req, resp) => {
  resp.send('Hello world!');
})

app.listen(3000, () =>
  console.log("🔥 Server started at http://localhost:3000")
);
