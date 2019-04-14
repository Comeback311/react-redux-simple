import { responseSuccess, responseError } from '../../tools';
import { firstUpper } from '../../tools';

// import db from '../../tools/mongo';
const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true });

let db;

mongoClient.connect((err, client) => {
    if (err) return console.log(err);

    db = client.db('react-vk');

    console.log('| Mongo connected.');
});

export default function usersRouter(req, res, next) {
    const collection = db.collection('users');

    collection.find({}).toArray((error, users) => {
        if (error || !users) {
            return responseError(res, {
                errorText: 'Произошла ошибка.'
            });
        }

        const usersData = prepareUsers(users);

        return responseSuccess(res, {
            users: usersData
        });
    });

    function prepareUsers(users) {
        return users.map(user => ({
            id: user.id,
            online: user.online,
            firstName: firstUpper(user.firstName),
            lastName: firstUpper(user.lastName)
        }))   
    }    
};
