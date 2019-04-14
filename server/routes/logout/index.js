import { responseSuccess } from '../../tools'

export default function logoutRouter(req, res, next) {
    res.clearCookie('uid');
    res.clearCookie('login');

    return responseSuccess(res);
}
