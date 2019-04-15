import { responseSuccess, responseError, sleep } from '../../tools';
import { prepareUser } from './functions';

export default function userRouter(req, res, next) {
    const client = req.app.locals.db;
    const collection = client.db('react-vk').collection('users');

    const uid = req.body.uid;

    if (!uid) {
        return responseError(res, {
            errorText: 'Отсутствует id пользователя.'
        });
    }

    collection.findOne({ uid: Number(uid) }, (error, user) => {
        if (error) {
            return responseError(res, {
                errorText: 'Произошла ошибка при выполнении запроса.'
            });
        }

        if (!user) {
            return responseError(res, {
                errorText: 'Пользователь не найден.',
                errorCode: 100
            });
        }

        return responseSuccess(res, {
            user: prepareUser(user)
        });
    });
};
