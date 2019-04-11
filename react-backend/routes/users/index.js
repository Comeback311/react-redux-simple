import { responseSuccess, responseError } from '../../tools';
import db from '../../tools/mongo';

export default function usersRouter(req, res, next) {
    const collection = db.collection('users');

    collection.findOne((error, result) => {
        // if (error || !result) {
        //     return responseError(res, {
        //         errorText: 'Пользователь не найден.'
        //     });
        // }

        return responseSuccess(res, {
            success: 'true1'
        });
    });
};
