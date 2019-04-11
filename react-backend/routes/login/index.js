import { responseSuccess, responseError } from '../../tools';

const crypto = require('crypto');

const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true });

let collection;

mongoClient.connect((err, client) => {
    if (err) return console.log(err);

    collection = client.db('react-vk').collection('users');

    console.log('mongo connected');

    // registerUser({ login: 'robot', password: '123', id: 2 });
});

export default function loginRouter(req, res, next) {
    const { login, password } = req.body;

    if (!login || !password) {
        return responseError(res, {
            errorText: 'Не заполнено поле логин или пароль.'
        });
    }

    collection.findOne({ login }, (error, result) => {
        if (error || !result) {
            return responseError(res, {
                errorText: 'Пользователь не найден.'
            });
        }

        const correctUserPassword = isCorrectUserPassword(result.password, password);

        if (!correctUserPassword) {
            return responseError(res, {
                errorText: 'Неправильный логин или пароль.'
            });
        }

        res.cookie('uid', result.uid, { maxAge: Date.now() + 1000000 });
        res.cookie('login', result.login, { maxAge: Date.now() + 1000000 });

        return responseSuccess(res, {
            uid: result.uid,
            login: result.login
        });
    });
};

function isCorrectUserPassword(dbPassword, userPassword) {
    return dbPassword === hashPassword(userPassword);
}

function registerUser({ login, password, id }) {
    return mongoClient.connect(function (err, client) {
        const db = client.db('react-vk');
        const collection = db.collection('users');

        if (err) return console.log(err);

        collection.insertOne({
            login, token: getToken(), uid: 2, password: hashPassword(password)
        }, function (err, result) {
            if (err) {
                return console.log(err);
            }

            console.log('success register', result.ops);
            client.close();
        });
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

