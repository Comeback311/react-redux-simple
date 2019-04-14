import { getSecretFields } from '../../tools';

export const prepareUser = function (user) {
    let localUser = Object.assign({}, user);

    console.log('getSecretFields', getSecretFields);

    getSecretFields.forEach(field => {
        if (field in localUser) {
            delete localUser[field];
        }
    });

    return localUser;
}
