const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');

router.post('/registration',
[
    check('username',"Имя пользователя не может быть пустым!").notEmpty(),
    check('password',"Пароль должен быть больше 4 и меньше 16 символов").isLength({min:4,max:16})
],
controller.registration);
router.post('/login',controller.login);
router.get('/users',authMiddleware([admin,user]),controller.getUsers);
//Массив ролей с доступом

module.exports = router;