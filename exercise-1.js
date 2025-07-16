const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
// Products Routes
app.route('/products')
  .get((req, res) => {
    res.json({ message: "This is the GET product path." });
  })
  .post((req, res) => {
    res.json({ message: "This is the POST product path." });
  })
  .put((req, res) => {
    res.json({ message: "This is the PUT product path." });
  })
  .patch((req, res) => {
    res.json({ message: "This is the PATCH product path." });
  })
  .delete((req, res) => {
    res.json({ message: "This is the DELETE product path."});
  });
// Users Routes
app.route('/users')
  .get((req, res) => {
    res.json({ message: "This is the GET user path." });
  })
  .post((req, res) => {
    res.json({ message: "This is the POST user path." });
  })
  .put((req, res) => {
    res.json({ message: "This is the PUT user path." });
  })
  .patch((req, res) => {
    res.json({ message: "This is the PATCH user path." });
  })
  .delete((req, res) => {
    res.json({ message: "This is the DELETE user path." });
  });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;

React

Reply







