const express = require('express');
const pino = require("pino")
const logger = pino({
  levelComparison: 'DESC',
  customLevels: {
    foo: 20, // `foo` is more valuable than `bar`
    bar: 10
  },
})

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.status(200).send({
  message: 'Hello World!',
}));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  logger.info("test")

  console.log(`Listening on ${port}`);
});

module.exports = app;
