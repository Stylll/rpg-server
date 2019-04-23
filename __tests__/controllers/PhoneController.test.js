import request from 'supertest';
import app from '../../src/app';
import PhoneController from '../../src/controllers/PhoneController';

// Mocking the write to file method in the testing environment
PhoneController.saveToFile = () => {};

describe('Test suite for PhoneController', () => {
  it('should return APP welcome message', (done) => {
    request(app)
      .get('/')
      .send({})
      .end((error, response) => {
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Welcome to the RPG APP');
        done();
      });
  });

  it('should return API welcome message', (done) => {
    request(app)
      .get('/api/v1/')
      .send({})
      .end((error, response) => {
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Welcome to RPG API version 1.');
        done();
      });
  });

  describe('Generate Random Phone Numbers - POST', () => {
    it('should return a list of generated phone numbers', (done) => {
      request(app)
        .post('/api/v1/numbers')
        .send({})
        .end((error, response) => {
          const { phoneNumbers, minimumPhoneNumber, maximumPhoneNumber } = response.body.data;
          expect(response.status).toBe(201);
          expect(response.body.message).toBe('10000 phone numbers successfully generated');
          expect(phoneNumbers.length).toBe(10000);
          expect(minimumPhoneNumber).toBe(phoneNumbers[0]);
          expect(maximumPhoneNumber).toBe(phoneNumbers[phoneNumbers.length - 1]);
          done();
        });
    });
  });
});
