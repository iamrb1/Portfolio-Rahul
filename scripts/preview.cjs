const express = require('express');
const path = require('path');

const app = express();
// express.static handles byte ranges (206/416), needed for video seeking.
app.use(express.static(path.resolve(__dirname, '../build'), {
  acceptRanges: true,
  maxAge: 0,
}));
const port = Number(process.env.PORT) || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio preview: http://127.0.0.1:${port}`);
});
