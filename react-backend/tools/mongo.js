const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true });

let db;

mongoClient.connect((err, client) => {
    if (err) return console.log(err);

    db = client.db('react-vk');

    console.log('| Mongo connected.');
});

export default db;
