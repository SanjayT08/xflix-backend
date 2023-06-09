const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middlewares/error');
const v1Routes = require('./routes/v1/index');

const app = express();

app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use('/v1', v1Routes);



app.use(errorHandler);

const APP_PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

app.listen(APP_PORT, () => console.log(`Server listening at port ${APP_PORT}`));

mongoose
    .connect(MONGODB_URL)
    .then(() => console.log(`Connected to DB at ${APP_PORT}`))
    .catch((error) =>
        console.log(`Error connected to DB at ${APP_PORT}\n`, error)
    );
