const express = require('express');
const router = express.Router();

import loginRouter from './login';
import logoutRouter from './logout';
import usersRouter from './users';

/* POST and GET auth listing. */
router.post('/login', loginRouter);

router.get('/logout', logoutRouter);

router.get('/users', usersRouter);

module.exports = router;
