const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/routes');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

dotenv.config({ path: path.join(__dirname, '.env')})
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use('/api/react-login/', router);

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	app.listen(PORT, () => {
        console.log(`We live at port ${PORT}`);
    })
}).catch((err) => {
	console.log(err);
})