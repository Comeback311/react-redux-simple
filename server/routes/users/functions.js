import { firstUpper } from '../../tools';

export function prepareUsers(users) {
    return users.map(user => ({
        uid: user.uid,
        online: user.online,
        firstName: firstUpper(user.firstName),
        lastName: firstUpper(user.lastName)
    }))
}
