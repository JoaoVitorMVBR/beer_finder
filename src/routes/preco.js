const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('precoBebida');
});

module.exports = router;