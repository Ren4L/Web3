const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('123');
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));