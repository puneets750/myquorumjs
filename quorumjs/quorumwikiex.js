const quorumjs   = require("quorum-js");
const tURL1 = "http://localhost:9081";
const Web3 = require("web3");
      const web3 = new Web3(
        new Web3.providers.HttpProvider("http://localhost:3100")
      );
const rawTransactionManager = quorumjs.RawTransactionManager(web3, {
        privateUrl: tURL1
    }); 
console.log(rawTransactionManager);
var Tx = require('ethereumjs-tx').Transaction;
 var privateKey =  new Buffer("p9xKDr8/knWLlpD4j5dL7Y12l0Kcg73VXAzsnKx6frA=", 'base64').toString('hex');
//console.log(privateKey);
var datah = new Buffer("QM4xqpsbq5HgaBBLE6+Q3LTC/WNEWmZNr+rHyhjxuvVtMS+jQzLQDfyXE2KM1z7zxkkYE3URdOODKjLtoBVmmA==", 'base64').toString('hex');
console.log(datah);
  var rawTx = {
   nonce: '0x0',
   gasPrice: '0x0', 
   gasLimit: '0x47b760',
   isPrivate: true,
   to: '0xc3db4f6af243130aa290fe2a346158d04c44382c',
   from:'0xa324164190666Ec78316fE318B40D9D2d8c3749d', 
   value: `0x${(0).toString(16)}`, 
   // This data should be the hex value of the hash returned by Quorum's privacy transaction manager after invoking storeraw api
 //  data: new Buffer(datah, 'hex')
data: '0x' + datah 
 }
  var tx = new Tx(rawTx);
tx.sign(new Buffer("8d002d17cfe933d4a37b0b1cea3ecc945e25ab156d6854d1d5c65f9abe60025e",'hex'));
  var serializedTx = tx.serialize();
console.log('0x' + serializedTx.toString('hex'));

  //console.log(serializedTx.toString('hex'));
 //f889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f
 web3.eth.sendRawPrivateTransaction('0x' + serializedTx.toString('hex'), {privateFor: ["Wd+SHPa7qj4sgwuS6RMg592Ch5imu1OK+RVSPFbg+Aw="]}, function(err, hash) {
   if (!err)
     console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
 });

