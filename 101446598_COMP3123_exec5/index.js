const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const person=require('./user.json')
app.use(express.json());

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req, res) => {
  const filePath = path.join(__dirname, 'home.html');
  res.sendFile(filePath);
});
/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(person));

});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post(`/login`, (req, res) => {
  const { username, password } = req.body;
  console.log(req.body); 
  
  if (username == person.username && password ==person.password ) {
    return res.status(200).json({ status: true, message: 'User Is valid' });
  } 

  else if (username!==person.username){
    return res.status(401).json({ status: false, message: 'User Name is invalid' });

  }
  else if (password!==person.password){
    return res.status(401).json({ status: false, message: 'Password is invalid' });
  }

});
/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  let username=req.params.username;
  let bye = "<b> " +username +" successfully logged out.<b> "
  res.send(bye);
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  console.log("Middleware Error Handling");
  const errStatus = 500;
  const errMsg = 'Server Error';
  res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
      stack: process.env.NODE_ENV === 'development' ? err.stack : {},
      errStack: err.stack
  })
  res.send('This is error router');
});

app.use('/', router);

app.listen(process.env.port || 8085);

console.log('Web Server is listening at port '+ (process.env.port || 8085));