import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './routes/index';
import open from 'open';


const port = process.env.PORT || 3000;
const app = express();
const address = `http://localhost:${port}`;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Pass api/v1 requests to routes
app.use('/api/v1', routes);

// default request handler
app.get('/*', (request, response) => {
    response.status(200).json({ message: "Welcome to the RPG APP" })
});
  
// Handle 404 errors and forward to error handler
app.use((request, response, next) => {
const error = new Error('404 not found');
error.status = 404;
next(error);
});
  
// Error Handler
app.use((error, request, response, next) =>
response.status(error.status || 500).json({ message: error.message || 'Error' }));


// Listen at designated port
app.listen(port, () => {
    console.log(`App running on ${address}`)
    // open(address);
});
