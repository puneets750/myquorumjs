const ethTx = require('ethereumjs-tx');
var web3 = require('web3');
const stripHexPrefix = require('strip-hex-prefix');
web3= new web3(new web3.providers.HttpProvider("http://localhost:3100"));
var ABI = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"payable":false,"type":"constructor"}];
var data = web3.eth.abi.encodeFunctionCall({ name: 'set', type: 'function',inputs: [{type: 'uint256',name: 'x'}]}, ['157']);
//console.log(web3.eth.abi);
console.log(data);
const txParams = {
nonce: '0x01b9',//nonce to be changed as per trnsaction from account
gasPrice: '0x00',
gasLimit: '0x47b760',
to: '0xa52566a4c7701f62f756d512c50d489d2e1d8c98',//smart contract address
value: '0x00',
from:'0xed9d02e382b34818e88b88a309c7fe71e65f419d',//Address used to sign the transaction
data:data
};

const tx = new ethTx(txParams);
const privKey = Buffer.from('e6181caaffff94a09d7e332fc8da9884d99902c7874eb74354bdcadf411929f1', 'hex');//Private key of the account
// Transaction is signed
tx.sign(privKey);
const serializedTx = tx.serialize();
const rawTx = '0x' + serializedTx.toString('hex');
//console.log(rawTx);
