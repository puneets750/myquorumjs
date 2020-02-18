const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3100"));
const quorumjs = require("quorum-js");

const txnManager = quorumjs.RawTransactionManager(web3, {
  publicUrl: "http://localhost:3100",
  privateUrl: "http://localhost:9081"
});
var ABI = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"payable":false,"type":"constructor"}];
var data = web3.eth.abi.encodeFunctionCall({ name: 'set', type: 'function',inputs: [{type: 'uint256',name: 'x'}]}, ['159']);
txnManager.storeRawRequest(data, "Wd+SHPa7qj4sgwuS6RMg592Ch5imu1OK+RVSPFbg+Aw=").then(function (tx){
                console.log("Contract address: ", tx);

                //Value retrieval over here!!!!
        }).catch(function (err) {
            console.log("error");
            console.log(err);
        });

