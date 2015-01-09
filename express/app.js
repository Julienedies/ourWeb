/**
 * Created by julien.zhang on 2015/1/9.
 */
/**
 * Created by julien.zhang on 2014/11/13.
 */
var fs = require("fs");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/static'));
//app.use(express.static(__dirname + '/view'));

app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

// 添加 body-parser 中间件就可以了
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));



app.get('/get/:url', function(req, res){
    var url = req.params.url;
    //url = new Buffer(url).toString('base64');
    //根据url取得相关衍生版本
    var json = require('./data/?.json'.replace('?', url));
    res.send(json ? json : {code:0, msg:'还没有衍生版本，你可以创建一个衍生版本哦'});
});

app.post('/save/:url', function(req, res){
    var url = req.params.url;
    //url = new Buffer(url).toString('base64');
    console.log(req.body)
    var content = JSON.stringify(req.body);
    //console.log(content);

    var f = './data/?.json'.replace('?', url);
    fs.writeFileSync(f, '');
    fs.appendFile(f, content, function(err){
        //console.log(err);
    });
    res.send({code:1, msg:'save success!'});
});


app.listen(4000);
console.log('server start...')