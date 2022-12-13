const express = require('express');
const router = express.Router();

const ReadableStream = require('stream').Readable;
const Json2csvTransform = require('json2csv').Transform;


const fields = ['id', 'tipo', 'corDe', 'corPara', 'marca'];
const opt = { fields };

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    const stream = new ReadableStream();
    stream.push(JSON.stringify(req.body));
    stream.push(null);

    const json2csv = new Json2csvTransform({}, opt);
    res.writeHead(200, { 'Content-Type': 'text/csv',  'Content-Disposition': 'attachment; filename=data.csv'});

    stream.pipe(json2csv).pipe(res);
})

module.exports = router;