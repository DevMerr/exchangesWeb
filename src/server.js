import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRouters from './routes/web';
import connectDB from './config/connectDB';

require('dotenv').config();

let app = express();

// config app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouters(app);
connectDB();

let port = process.env.PORT || 7300;
app.listen(port, () => {
   console.log('Backend NodeJs is running on port ' + port);
});