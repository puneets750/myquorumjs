const Web3 = require("web3");
      const web3 = new Web3(
        new Web3.providers.HttpProvider("http://localhost:3100")
      );
var Tx = require('ethereumjs-tx').Transaction;
 var privateKey =  new Buffer("60fe47b1000000000000000000000000000000000000000000000000000000000000009d", 'hex').toString('base64');
console.log(privateKey);
