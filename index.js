const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 3000;

app.use(express.json());
app.use(require('./routes/cofe.route'))

mongoose.connect("mongodb+srv://Khamzatov:Magham01@cluster0.zaemc.mongodb.net/cofe", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB')) 
  
app.listen(port, () => {
    console.log('Сервер запущен успешно')
})