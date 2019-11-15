var Cryptr = require('cryptr'),
cryptr = new Cryptr('habibi');

var encrypted = cryptr.encrypt('Andi Muhammad Habibi');
var decrypted = cryptr.decrypt(encrypted);

console.log(encrypted);
console.log(decrypted);