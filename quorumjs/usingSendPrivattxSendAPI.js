const Web3       = require('web3')
const EthereumTx = require('ethereumjs-tx');
const ethUtil    = require('ethereumjs-util');
const quorumjs   = require("quorum-js");

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

const privateKey = [
    "a7dc4a0ebf3f92758b9690f88f974bed8d7697429c83bdd55c0cec9cac7a7eb0"
];
var pk1  = "p9xKDr8/knWLlpD4j5dL7Y12l0Kcg73VXAzsnKx6frA=";
var pk2 = "p9xKDr8/knWLlpD4j5dL7Y12l0Kcg73VXAzsnKx6frA=";
const password = "abc";

const fromAccountAddress = '0x' + ethUtil.privateToAddress("0x" + privateKey[0]).toString('hex');
const abi = [{ "constant": true, "inputs": [], "name": "storedData", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "x", "type": "uint256" }], "name": "set", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "get", "outputs": [{ "name": "retVal", "type": "uint256" }], "payable": false, "type": "function" }, { "inputs": [{ "name": "initVal", "type": "uint256" }], "payable": false, "type": "constructor" }];
const contractBytecode = "0x6060604052341561000f57600080fd5b604051602080610149833981016040528080519060200190919050505b806000819055505b505b610104806100456000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632a1afcd914605157806360fe47b11460775780636d4ce63c146097575b600080fd5b3415605b57600080fd5b606160bd565b6040518082815260200191505060405180910390f35b3415608157600080fd5b6095600480803590602001909190505060c3565b005b341560a157600080fd5b60a760ce565b6040518082815260200191505060405180910390f35b60005481565b806000819055505b50565b6000805490505b905600a165627a7a72305820d5851baab720bba574474de3d09dbeaabc674a15f4dd93b974908476542c23f00029";
var toContractAddress, value
let contract     = new w1.eth.Contract(abi);
const methodData = contract.deploy({
    data: contractBytecode,
    arguments: [42]
}).encodeABI();

function get(addr) {
    const c1 = new w1.eth.Contract(abi, addr);
  

    c1.methods.get().call().then(console.log).catch((err) => { console.log("err 1") });
}

function oldRawTx() {
    const rawTransactionManager = quorumjs.RawTransactionManager(w1, {
        privateUrl: tURL1
    });
    const txnParams = {
    gasPrice: '0x0',
        gasLimit: '0x47b760',
        to: "",
        value: '0x0',
        data: methodData,
        from: {
            privateKey: '0x' + privateKey[0]
        },
        privateFrom: pk1,
        privateFor: [pk2],
        nonce: '0x0'
 };

  w1.eth.getTransactionCount(fromAccountAddress, 'pending', (err, nonce) => {
console.log(nonce);
 //       txnParams.nonce = new Buffer(decimalToHexString(nonce,'hex'));//nonce;
        console.log("Nonce :", nonce);
        const newTx = rawTransactionManager.sendRawTransactionViaSendAPI(txnParams);
        newTx.then(function (tx){
                console.log("Contract address: ", tx.contractAddress);
                
                //Value retrieval over here!!!! 
                get(tx.contractAddress);
        }).catch(function (err) {
            console.log("error");
            console.log(err);
        });
    });
}

oldRawTx();
