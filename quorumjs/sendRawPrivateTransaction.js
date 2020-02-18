const Web3       = require('web3')
const EthereumTx = require('ethereumjs-tx');
const ethUtil    = require('ethereumjs-util');
const quorumjs   = require("quorum-js");
var rat = require("./node_module/quorum-js/lib/index.js");
const h1 = "http://localhost:3100";
function decimalToHexString(number)
{
  if (number < 0)
  {
    number = 0xFFFFFFFF + number + 1;
  }

  return number.toString(16).toUpperCase();
}

const tURL1 = "http://localhost:9081"; //Tessera URL of Node1


const w1 = new Web3(new Web3.providers.HttpProvider(h1));
rat.extend(w1,"eth");
console.log(w1.eth.sendRawPrivateTransaction);
