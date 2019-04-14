import url from '../secret/db';

export const responseSuccess = function (res, data = {}) {
    console.log('resp succ', data);
    return res.json({
        success: true,
        ...data
    });
};

export const responseError = function (res, data = {}) {
    console.log('resp err', data);
    return res.json({
        error: true,
        ...data
    });
}

export const uconsole = function (data) {
    const bold = '\x1b[1m';
    const underscore = '\x1b[4m';
    const blue = '\x1b[34m';
    const separator = '%s';
    const resetColor = '\x1b[0m';

    const prepend = '[app-console] ';

    if (typeof (data) === 'string') {
        console.log(bold + underscore + blue + separator + resetColor, prepend + data);
    } else console.log(data);
}

export const firstUpper = function (str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

export const mongoConnect = function (app) {
    const MongoClient = require('mongodb').MongoClient;
    const mongoClient = new MongoClient(url, { useNewUrlParser: true });

    mongoClient.connect((err, client) => {
        if (err) return console.log(err);

        uconsole('Mongo connected.');

        app.locals.db = client;
    });
};

// Поля, которые не должны передаваться на клиент
export const getSecretFields = ['_id', 'password', 'token', 'login'];
