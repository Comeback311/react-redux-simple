const express = require('express');
const router = express.Router();

import loginRouter from './login';
import logoutRouter from './logout';
import usersRouter from './users';
import userRouter from './user';
import onlineRouter from './online';

/* POST and GET auth listing. */
router.post('/login', loginRouter);

router.get('/logout', logoutRouter);

router.get('/users', usersRouter);

router.post('/user', userRouter);

router.get('/online', onlineRouter);

module.exports = router;
