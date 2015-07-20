var express = require('express');
var router = express.Router();
var RegisterModules = require('../modules/RegisterModules.js');
var LoginModules = require("../modules/LoginModules.js");

router.get('/', function (req, res, next) {
    res.redirect('/game');
});

router.get('/introduce', function (req, res, next) {
    res.render('introduce', {
        tittle: [],
        introduce: [
            '阿桑地方',
            '啊的说法撒点粉',
            '撒旦法时代',
            '许昌县从',
            '撒发生地方',
            '现场直播V下次V吧',
            '撒点粉为人父',
            '啊的说法分',
            '时代发生地方规范',
            '从vbs地方',
            '文认为'
        ]
    });
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {
        tittle: 'contact me',
        imgUrl: "public/img/weixin.png",
        content: [
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf"
        ]
    });
});

router.get('/login', function (req, res, next) {
    res.render('login', {
        message: null
    });
});

router.post('/login', function (req, res, next) {
    var password = req.body.password;
    var email = req.body.email;

    var login = new LoginModules();
    login.login(email, password, function (data, docs) {
        if (data) {
            req.session.name = docs.name;
            res.redirect('/');
        } else {
            req.session.message = '';
            res.redirect('/login');
        }
    });
});

router.get('/register', function (req, res, next) {
    res.render('register', {
        tittle: 'register',
        message: req.session.message
    });
});

router.post('/register', function (req, res, next) {
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    var register = new RegisterModules();

    //console.log(name, password, email);

    register.AddUser({name: name, password: password, email: email}, function (data) {
        //console.log(data);
        if (data) {
            req.session.user = name;
            console.log('route index save ok');
        } else {
            req.session.message = '<font color="red">用户名或密码不正确</font>';
            console.log('save error');
            return res.redirect('/register');
        }
    });
});

module.exports = router;
