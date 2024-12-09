const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req,res) => {
    res.send('hello');
});



const PORT = 3000;
app.listen(process.env.PORT, () => {
    console.log(`port listening on ${PORT}`);
});