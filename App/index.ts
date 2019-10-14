import express from 'express';
import config from "./config";

const app = express();

app.set("json spaces", 4);

console.log(config);

app.get("*", (req, res, next) => {
  res.send(config);
});

app.listen(config.port);