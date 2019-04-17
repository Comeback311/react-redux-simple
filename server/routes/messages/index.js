import { responseSuccess, responseError } from '../../tools';

export default function messagesRouter(req, res, next) {
    const client = req.app.locals.db;
    const collectionMail = client.db('react-vk').collection('mail');
    const collectionUsers = client.db('react-vk').collection('users');

    const uid = req.body.uid;

    if (!uid) {
        return responseError(res, {
            errorText: 'Отсутствует id пользователя.'
        });
    }

    const query = getQuery(uid, req.cookies.uid);

    if (uid === req.cookies.uid) {
        return responseError(res, {
            errorText: 'Нельзя отправить сообщение самому себе.',
            errorCode: 101
        });
    }

    collectionUsers.findOne({ uid: Number(uid) }, (error, user) => {
        if (error) {
            return responseError(res, {
                errorText: 'Произошла ошибка при запросе к БД за пользователем.'
            });
        }

        if (!user) {
            return responseError(res, {
                errorText: 'Пользователь не найден.',
                errorCode: 102
            });
        }

        collectionMail.find(query).sort( { timestamp: 1 } ).toArray((error, messages) => {
            if (error) {
                return responseError(res, {
                    errorText: 'Произошла ошибка при запросе к БД.'
                });
            }
    
            if (!messages.length) {
                return responseSuccess(res, {
                    text: 'Ничего не найдено.'
                });
            }

            return responseSuccess(res, {
                messages: prepareMessages(messages),
                user: prepareUser(user)
            });
        });
    });

    function prepareMessages(messages) {
        return messages.map(item => {
            delete item._id;

            return { ...item };
        });
    }

    function prepareUser(user) {
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            sex: user.sex
        }
    }

    function getQuery(from, to) {
        const messagesFrom = { $and: [{ "uid_from": from }, { "uid_to": to }] };
        const messagesTo = { $and: [{ "uid_from": to }, { "uid_to": from }] };

        return { $or: [messagesFrom, messagesTo] };
    }
};
