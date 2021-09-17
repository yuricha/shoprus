const express = require('express');
const app = express();
//middelwar
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//routes
app.use(require('./routes/index'));
app.listen(3000);

console.log('port 3000 up');

module.exports=app