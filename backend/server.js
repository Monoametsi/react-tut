const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config({ path: path.join(__dirname, '.env')})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`We live at port ${PORT}`)
})