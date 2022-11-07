const express = require('express');
const router = express.Router();
const TweetCtrl = require('../controllers/tweet');

router.get('/', TweetCtrl .index);
router.get('/new', TweetCtrl .new);
router.get('/:id', TweetCtrl .show);
router.post('/', TweetCtrl .create);

module.exports = router;
