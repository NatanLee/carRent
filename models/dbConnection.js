const config = require('config');
const mysql = require('mysql2');

function connection () {    
    return mysql.createConnection({
        host: config.get('host'),
        user: config.get('user'),
        database: config.get('database'),
        password: config.get('password')
    })      
}

exports.getAllCars = function () {     
    const db = connection();
    const sql = "SELECT * FROM cars";

    return new Promise ((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) {
              reject(err);
            }
            else {
              resolve(result);
              db.end();
            }
        });
    });    
}

exports.getThreeFreeCars = function () {     
    const db = connection();
    const sql = "SELECT * FROM cars WHERE rent_class = 1 AND status = 'free' LIMIT 3";

    return new Promise ((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) {
              reject(err);
            }
            else {
              resolve(result);
              db.end();
            }
        });
    });    
}

exports.getOneCar = function (id){
    const db = connection();
    const sql = `SELECT * FROM cars WHERE id = ${id}`;
    return new Promise ((resolve, reject) => {
        db.query(sql, (err, result) => {
            if(err) {
                reject(err);
            }else{
                resolve(result[0]);
                db.end();
            }
        });
    });
    
}

exports.getPrice = function (car_class){
    //console.log("CARCLASS", car_class)
    const db = connection();
    const sql = `SELECT * FROM rent_price WHERE car_class = ${car_class}`;
    return new Promise ((resolve, reject) => {
        db.query(sql, (err, result) => {
            if(err) {
                reject(err);
            }else{
                resolve(result[0]);
                db.end();
            }
        });
    });
    
}


