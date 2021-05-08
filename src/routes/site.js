const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
    router.get('/signup', siteController.signup);
    router.get('/login', siteController.login);
    router.get('/search', siteController.search);
    router.get('/', siteController.index);
module.exports = router;
