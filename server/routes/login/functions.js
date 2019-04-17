const crypto = require('crypto');

export function isCorrectUserPassword(dbPassword, userPassword) {
    return dbPassword === hashPassword(userPassword);
}

export function registerUser({ db, login, password, uid, firstName, lastName, sex }) {
    const collection = db.collection('users');

    collection.insertOne({
        login, token: getToken(), uid, password: hashPassword(password), firstName, lastName,
        sex
    }, function (err, result) {
        if (err) {
            return console.log(err);
        }

        console.log('success register', result.ops);
    });
}

function hashPassword(password) {
    const secret = 'abcdefg';

    const hashStart = 'tgh&^*^aT';
    const hashEnd = 'B(E@)NRF&';

    const hashString = hashStart + password + hashEnd;

    return crypto
        .createHmac('sha256', secret)
        .update(hashString)
        .digest('hex');
}

function getToken() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890',
        lIMIT = 20,
        word = '';
    for (let i = 0; i < lIMIT; i++) {
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }

    return word;
}
