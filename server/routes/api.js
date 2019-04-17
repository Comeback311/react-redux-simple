const express = require('express');
const router = express.Router();

import loginRouter from './login';
import usersRouter from './users';
import userRouter from './user';
import onlineRouter from './online';
import messagesRouter from './messages';
import messageRouter from './message';

/* POST and GET auth listing. */
router.post('/login', loginRouter);

router.get('/users', usersRouter);

router.post('/user', userRouter);

router.post('/messages', messagesRouter);

router.post('/message', messageRouter);

router.get('/online', onlineRouter);

module.exports = router;
