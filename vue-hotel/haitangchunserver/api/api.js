const express = require('express')
const router = express.Router()
const db = require('./../db')
const bodyParser = require('body-parser');
/*const sql = require('./../db/sql')*/
const mysql = require('mysql')

var conn = mysql.createConnection(db.mysql)
conn.connect()
router.get('/test', (req, res) => {
    var sql = "select * from users";
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result);
            res.json(result);
        }
    })
});

//酒店图片
router.get('/hotelPic', (req, res) => {
    var sql = "select * from room";
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result);
            res.json(result);
        }
    })
});
//查询新闻
router.get('/getNews', (req, res) => {
    var sql = "select * from news"
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log(result);
            res.json(result)
        }
    })

});
//删除新闻
router.post('/deleteNews', bodyParser.json(), (req, res) => {
    var id = req.body.id;
    console.log(id)
    var sql = "delete from news where idnews=" + id
    console.log(sql)
    conn.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            /*  res.send("删除成功")*/
            res.redirect(301, 'http://127.0.0.1:8080/#/manage/article')
        }
    })
})
//增加新闻
router.post('/addNews', bodyParser.json(), (req, res) => {
    var _data = [
        req.body.title,
        req.body.date,
        req.body.content,
        req.body.author,
    ]
    console.log(_data)
    var sql = "insert into news (newstitle,date,content,author) values(?,?,?,?)"
    conn.query(sql, _data, (err, result) => {
        if (err) {
            throw err
        } else {
            console.log(_data)
            res.redirect('/getNews')
        }
    })
})
//更新新闻
router.post('/updateNews', bodyParser.json(), (req, res) => {
    console.log(req.body)
    var id = req.body.id;
    console.log(id)
    var sql = "updateNews news set where idnews=" + id
    console.log(id)
    conn.query(sql, (err, result) => {
        console.log(result)
        if (err) {
            throw err
        } else {
            res.redirect('/getNews')
        }
    })
})
//通过id查找新闻
router.post('/searchNews', bodyParser.json(), (req, res) => {
    console.log(req.body)
    var id = req.body.id
    console.log(id)
    var sql = "select * from news where idnews=" + id
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log(result);
            res.send(result)
        }
    })
})



//留言板信息管理
//获取留言板信息


//获取留言板信息
router.get('/getMessage', (req, res) => {
    var sql = "select * from guestbook"
    conn.query(sql, (err, result) => {
        if (err) {
            throw (err)
        }
        if (result) {
            // console.log(result);
            res.json(result)
        }

    })
})

//增加留言板信息
router.post('/addMessage', bodyParser.json(), (req, res) => {
    var _data = [
        req.body.name,
        req.body.email,
        req.body.subject,
        req.body.message
    ]
    var sql = "insert into guestbook(gbname,gbEmail,gbsub,gbcon) values(?,?,?,?)"
    conn.query(sql, _data, (err, result) => {
        if (err) {
            throw err
        } else {
            console.log(1)
            res.send("留言成功")
        }
    })
})
//删除留言板信息
router.post('/deleteMessage', (req, res) => {
    var id = req.body.id
    var sql = "delete from guestbook where gbid=" + id
    console.log(id)
    conn.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            res.send("删除成功")
            /* res.redirect('/getNews')*/
        }
    })

})
//管理员登陆
router.post('/searchUser', bodyParser.json(), (req, res) => {
    var sql = 'select user,password from users'
    var params = req.body;
    conn.query(sql, function(error, result) {
        var arrResult = JSON.parse(JSON.stringify(result))
        if (error) {
            throw error;
        } else if (arrResult.find(it => {
                return params.username == it.user && params.password === it.password
            })) {
            res.cookie('user', params.username, { expires: new Date(Date.now() + 900000) }, { httpOnly: true })
            res.redirect(301, 'http://127.0.0.1:8080/#/manage/article')
        } else {

            res.end('password or user incorrect')
        }

    })
});
module.exports = router