const {Router} = require('express');
const router = Router();
const account = require('./account');

router.get('/', (req, res) => {
    res.send('Главная страница сайта');
});

router.use('/account', account);

module.exports = router;