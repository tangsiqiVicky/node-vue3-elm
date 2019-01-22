import createError from 'http-errors';
import express from 'express';
import config from 'config-lite';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import router from './routes/index.js';


var app = express();

router(app)
app.get('/', (req, res) => {
    res.send(`hello world!`);
});
app.listen(config.port, () => {
	 console.log('server running http://localhost:'+ config.port);
});