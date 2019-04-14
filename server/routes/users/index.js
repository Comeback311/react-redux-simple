import { responseSuccess, responseError } from '../../tools';
import { prepareUsers } from './functions';

export default function usersRouter(req, res, next) {
    const client = req.app.locals.db;
    const collection = client.db('react-vk').collection('users');

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
};
