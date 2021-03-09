const http = require('http');
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json())

app.get('/hello/:foo/:bar', (req, res) =>{
    res.json({message:'Hello BScBest!', data:[
        req.params.foo,
        req.params.bar
    ]});
});

//post request
app.post('/hello', (req, res) => {
    res.json({result: 'Post was sent', data: req.body});
});




let users = []; // names of users will be stored here
(async function getNames(){
  try{
    const {data} = await axios.get("https://swapi.dev/api/people/");
    console.log(data)
    users = data.results.map(user=>user.name);
    console.log(users);
    } catch(error){
    console.log(error)
  }
})()

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});