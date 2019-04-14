import { responseSuccess, responseError } from '../../tools';
import { isCorrectUserPassword } from './functions';

export default function loginRouter(req, res, next) {
    const { login, password } = req.body;

    if (!login || !password) {
        return responseError(res, {
            errorText: 'Не заполнено поле логин или пароль.'
        });
    }

    const client = req.app.locals.db;
    const collection = client.db('react-vk').collection('users');

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

// registerUser({ db, login: 'den', password: 123, uid: 1, firstName: 'Денис', lastName: 'Авдеев' });
// registerUser({ db, login: 'ivan', password: 123, uid: 2, firstName: 'Иван', lastName: 'Иванович' });
