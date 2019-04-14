import { responseSuccess, responseError } from '../../tools';
// import db from '../../tools/mongo';

const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true });

let db;

mongoClient.connect((err, client) => {
    if (err) return console.log(err);

    db = client.db('react-vk');

    console.log('| Mongo connected.');
});

export default function onlineRouter(req, res, next) {
    const login = req.cookies.login;

    if (!login) return responseError(res);

    const collection = db.collection('users');

    return new Promise(function (resolve, reject) {
        collection.updateOne({ login }, {
            $set: {
                online: + new Date()
            }
        }, (error, result) => {
            if (error || !result) {
                return reject(true)
            }

            return resolve(true);
        })
    })
        .then(() => responseSuccess(res))
        .catch(() => responseError(res, {
            errorText: 'Произошла ошибка при обновлении данных.'
        }));
};
