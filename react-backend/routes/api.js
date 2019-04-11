import loginRouter from './login';
import logoutRouter from './logout';

const express = require('express');
const router = express.Router();

/* POST and GET auth listing. */
router.post('/login', loginRouter);

router.get('/logout', logoutRouter);

module.exports = router;
