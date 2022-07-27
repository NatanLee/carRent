const express = require('express');
const config = require('config');
const mysql = require('mysql2');

const app = express();

app.use('/api/cars', require('./routes/routes'));

const PORT = config.get('port') || 5000;

app.listen(PORT, () => console.log(`App has been startred at port ${PORT}`));
   




/* connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
      app.listen(PORT, () => console.log(`App has been startred at port ${PORT}`));
    }
 });
 // закрытие подключения
 connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
}); */

