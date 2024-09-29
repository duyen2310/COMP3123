const express = require('express');
const app = express();

// Define a route
app.get('/hello', (req, res) => {
  res.send('Hello Express JS!');
});

app.get('/user', (req, res) => {
let firstname = req.query.firstname ||"Pritish";
let lastname= req.query.lastname || "Patel";
res.send({"firstname: ": firstname, "lastname: ": lastname});
});

app.post(`/user/:firstname/:lastname`, (req, res) => {
  console.log(req.params);
  const firstname = req.params.firstname;
  const lastname = req.params.lastname;

  res.json({
      "firstname": firstname,
      "lastname": lastname
  });
});

// Start the server
const PORT = process.env.PORT||3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
