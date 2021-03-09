const express = require('express'),
router = express.Router();

router.get('/hello/:foo/:bar', (req, res) =>{
    res.json({message:'Hello BScBest!', data:[
        req.params.foo,
        req.params.bar
    ]});
});

//post request
router.post('/hello', (req, res) => {
    res.json({result: 'Post was sent', data: req.body});
});

module.exports = router;