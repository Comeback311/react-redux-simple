import { responseSuccess, responseError } from '../../tools';

export default function messageRouter(req, res, next) {
    const client = req.app.locals.db;
    const collection = client.db('react-vk').collection('mail');

    const uid = req.body.uid;
    const message = req.body.message.trimRight();

    if (!uid || !message) {
        return responseError(res, {
            errorText: 'Отсутствует id пользователя или сообщение.'
        });
    }

    const data = { timestamp: +new Date(), uid_from: req.cookies.uid, uid_to: uid, message };

    collection.insertOne(data, (error, result) => {
        if (error) {
            return responseError(res, {
                errorText: 'Произошла ошибка при запросе к БД.'
            });
        }

        if (result && result.ops) {
            return responseSuccess(res, {
                message: result.ops[0]
            });
        }
    });
};
