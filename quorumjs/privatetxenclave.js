const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3100"));
const quorumjs = require("quorum-js");

const enclaveOptions = {
  /* at least one enclave option must be provided     */
  /* ipcPath is preferred for utilizing older API     */
  /* Constellation only supports ipcPath              */
  /* For Tessera: privateUrl is ThirdParty server url */
  ipcPath: "/opt/blockchain/data/working-dir/c/tm.ipc",
  publicUrl: "http://localhost:3100",
  privateUrl: "http://10.0.124.6:9081"
};

const rawTransactionManager = quorumjs.RawTransactionManager(web3, enclaveOptions);

const txnParams = {
  gasPrice: 0,
  gasLimit: 4300000,
  to: new Buffer("0",'hex'),
  value: 0,
  data: "0x6060604052341561000f57600080fd5b6",
  from: "0xdb7d2dd56e97ca24cc425089ecab5b2a3f90fca2",
  isPrivate: true,
  privateFrom: "Wd+SHPa7qj4sgwuS6RMg592Ch5imu1OK+RVSPFbg+Aw=",
  privateFor: ["Wd+SHPa7qj4sgwuS6RMg592Ch5imu1OK+RVSPFbg+Aw="],
  nonce: 0 
};
//console.log(rawTransactionManager);
// Older API: txn manager and Quorum version agnostic
// requires the IPC path to be set in enclaveOptions
rawTransactionManager.sendRawTransactionViaSendAPI(txnParams).then(function (tx){
                console.log("Contract address: ", tx.contractAddress);
                
                //Value retrieval over here!!!! 
                get(tx.contractAddress);
        }).catch(function (err) {
            console.log("error");
            console.log(err);
        });
   


// Newer API: Quorum v2.2.1+ and Tessera
// requires the private URL to be set in enclaveOptions
//rawTransactionManager.sendRawTransaction(txnParams);
