const express = require('express');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

const app = express();
app.use(jsonParser);


app.post('/', (req, res) => {
  console.log(req);

  let reqBody = req.body;

  if(reqBody) {
    // eval(`var execute = ${reqBody.executeThis}`);
    // execute(2,3);

    String.prototype.parseFunction = function () {
      var funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
      var match = funcReg.exec(this.replace(/\n/g, ' '));

      if(match) {
          return new Function(match[1].split(','), match[2]);
      }

      return null;
  };

  let execute = reqBody.executeThis.parseFunction();
  console.log(execute(3,4));
  }

  res.status(200).send({
    StatusCode :200,
    Message:"Successfully executed"
})
})


const port = 5000;
app.listen(port, ()=> {
    console.log(`API is Up and running on port ${port}`);
})