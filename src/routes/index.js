import '@babel/polyfill';
import express from 'express';
import PhoneController from '../controllers/PhoneController';

const router = express.Router();

router.get('/', (request, response) => {
  response.status(200)
    .json({ message: 'Welcome to RPG API version 1.' });
});

router.post('/numbers', PhoneController.generateRandomNumber);

export default router;
