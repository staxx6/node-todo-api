// const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 10,
};

let token = jwt.sign(data, '123abc');
console.log(token);

let decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);

// let message = 'I am user number 3';
// let hash = SHA256(message).toString(); // eslint-disable-line new-cap
//
// console.log('Message:', message);
// console.log('Message hash:', hash);
//
// let data = {
//     id: 4,
// };
//
// let token = {
//     data,
//     // eslint-disable-next-line new-cap
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString(),
// };
//
// token.data.id = 5;
// // eslint-disable-next-line new-cap
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// // eslint-disable-next-line new-cap
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed');
// }
