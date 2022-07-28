  // http call here => sends data to second server ()

// console.log('hello world');
// server => takes input => send a http call to server 2  => here execute it

const axios = require('axios');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("add your js here => ", (jsCode) => {
  console.log(`you added this =>  ${jsCode}!`);

  const url = "http://localhost:5000/";
  console.log(`sending ${jsCode} to xecution server.........`);

  axios({
    method: 'post',
    url: url,
    data: {
      executeThis: jsCode
    }
  }).then(res => {
    console.log(res);

    readline.close();
  });

});
