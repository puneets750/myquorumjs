const ethUtil    = require('ethereumjs-util');
const fromAccountAddress = '0x' + ethUtil.privateToAddress("0xa7dc4a0ebf3f92758b9690f88f974bed8d7697429c83bdd55c0cec9cac7a7eb0").toString('hex');
console.log(fromAccountAddress);
