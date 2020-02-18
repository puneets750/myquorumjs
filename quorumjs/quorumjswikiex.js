const web3 = new Web3(new Web3.providers.HttpProvider(address));
const quorumjs = require("quorum-js");

const enclaveOptions = {
  /* at least one enclave option must be provided     */
  /* ipcPath is preferred for utilizing older API     */
  /* Constellation only supports ipcPath              */
  /* For Tessera: privateUrl is ThirdParty server url */
  ipcPath: "/quorum-examples/examples/7nodes/qdata/c1/tm.ipc",
  publicUrl: "http://localhost:8080",
  privateUrl: "http://localhost:9081"
};

const rawTransactionManager = quorumjs.RawTransactionManager(web3, enclaveOptions);

const txnParams = {
  gasPrice: 0,
  gasLimit: 4300000,
  to: null,
  value: 0,
  data: deploy,
  from: decryptedAccount,
  isPrivate: true,
  privateFrom: TM1_PUBLIC_KEY,
  privateFor: [TM2_PUBLIC_KEY],
  nonce
};

// Older API: txn manager and Quorum version agnostic
// requires the IPC path to be set in enclaveOptions
rawTransactionManager.sendRawTransactionViaSendAPI(txnParams);

// Newer API: Quorum v2.2.1+ and Tessera
// requires the private URL to be set in enclaveOptions
rawTransactionManager.sendRawTransaction(txnParams);
