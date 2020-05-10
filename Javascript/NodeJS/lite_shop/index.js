let express = require('express');
let app = express();
let mysql = require('mysql');           // подключаем mysql модуль

/**
 *  public - имя папки, где хранится статика
 */
app.use(express.static(__dirname + '/public'));
app.use(express.json());
/**
 * задаем шаблонизатор
 */
app.set('view engine', 'pug');

const nodemailer = require('nodemailer');

/**
 * настраиваем модуль mysql
 */
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'market'
});

connection.connect();

app.listen(8080, function () {
    console.log('node work on port 8080');
});

app.get('/', function (request, response) {
    let cat = new Promise(function (resolve, reject) {
        connection.query(
           "SELECT id, name, cost, image, category FROM" +
            "(SELECT id, name, cost, image, category, if(if(@curr_category != category, " +
            "@curr_category := category, '' ) != ''," +
            "@k := 0, @k := @k + 1) as ind FROM goods, ( SELECT @curr_category := '' ) v ) " +
            "goods WHERE ind < 3",
           function (error, result, fields) {
                if (error) return reject(error);
                resolve(result);
           }
        );
    });
    let catDescription = new Promise(function (resolve, reject) {
        connection.query(
            "SELECT * FROM category",
            function (error, result, fields) {
                if (error) return reject(error);
                resolve(result);
            }
        );
    });
    Promise.all([cat, catDescription]).then(function (value) {
        console.log(value[1]);
        response.render('index', {
            goods: JSON.parse(JSON.stringify(value[0])),
            cat: JSON.parse(JSON.stringify(value[1]))
        })
    });
});

app.get('/cat', function (request, response) {
    //console.log(request.query.id);
    let catId = request.query.id;

    let cat = new Promise(function (resolve, reject) {
        connection.query(
            'SELECT * FROM goods WHERE id = ' + catId,
            function (error, result) {
                if (error) reject(error);
                resolve(result);
            });
    });

    let goods = new Promise(function (resolve, reject) {
        connection.query(
            'SELECT * FROM goods WHERE category = ' + catId,
            function (error, result) {
                if (error) reject(error);
                resolve(result);
            });
    });

    Promise.all([cat, goods]).then(function (value) {
        //console.log(value[0]);
      response.render('cat', {
         cat: JSON.parse(JSON.stringify(value[0])),
         goods: JSON.parse(JSON.stringify(value[1]))
      });
    })
});

//connection.end();

app.get('/goods', function (request, response) {
    //console.log(request.query.id);
    connection.query('SELECT * FROM goods WHERE id = ' + request.query.id, function (error, result, fields) {
        if (error) throw error;
        response.render('goods', {goods: JSON.parse(JSON.stringify(result))});
    });
});

app.get('/order', function (request, response) {
        response.render('order');
});

app.post('/get-category-list', function (request, response) {
    //console.log(request);
    connection.query('SELECT id, category FROM category', function (error, result) {
        if (error) throw error;
        //console.log(result);
        response.send(JSON.stringify(result));
    });
});

app.post('/get-goods-info', function (request, response) {
    console.log(request.body.key);
    if (request.body.key.length != 0) {
    connection.query('SELECT id, name, cost FROM goods WHERE id IN (' + request.body.key.join(',') + ')', function (error, result) {
        if (error) throw error;
        //console.log(result);
        let goods = {};
        for (let i = 0; i < result.length; i++) {
                goods[result[i]['id']] = result[i];
        }
        response.json(goods);
    });
    } else{
        response.send('0');
    }
});

app.post('/finish-order', function (request, response) {
    console.log(request.body);
    if (request.body.key.length != 0){
        let key = Object.keys(request.body.key);
        connection.query(
            'SELECT id, name, cost FROM goods WHERE id IN (' + key.join(',') + ')',
            function (error, result) {
                if (error) throw error;
                console.log(result);
                console.log('order now');
                sendMail(request.body, result).catch(console.error);
                response.send('1');
        });
    } else{
        response.send('0');
    }
});

async function sendMail(data, result) {
    let res = '<h2>Order in lite shop</h2>';
    let total = 0;
    for (let i = 0; i < result.length; i++){
        res += `<p>${result[i][`name`]} - ${data.key[result[i]['id']]} - ${result[i]['cost'] * data.key[result[i]['id']]} uah</p>`;
        total+= result[i]['cost'] * data.key[result[i]['id']];
    }
    console.log(res);
    res += '<hr>';
    res += `Total ${total} uah`;
    res += `<hr>Phone: ${data.phone}`;
    res += `<hr>Username: ${data.username}`;
    res += `<hr>Address: ${data.address}`;
    res += `<hr>Email: ${data.email}`;

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
        }
    });

    let mailOption = {
      from: '<vozandrey2001@gmail.com>',
      to : "vozandrey2001@gmail.com," + data.email,
      subject: 'Lite shop order',
      text: 'Hello world',
      html: res,
    };

    let info = await transporter.sendMail(mailOption);
    console.log("MessageSent: %s", info.messageId);
    console.log("PreviewSent: %s", nodemailer.getTestMessageUrl(info));
    return true;
}
