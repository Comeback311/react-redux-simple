import { responseSuccess, responseError } from '../../tools';

export default function onlineRouter(req, res, next) {
    const client = req.app.locals.db;
    const login = req.cookies.login;

    if (!login) return responseError(res);

    const collection = client.db('react-vk').collection('users');

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
