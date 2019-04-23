import fs from 'fs';

export default class PhoneController {
  static generateRandomNumber(request, response) {
    const minimum = 100000000;
    const maximum = 999999999;
    const phoneNumbers = [];
    const size = 10000;
    /* eslint-disable no-plusplus */
    for (let i = 0; i < size; i++) {
      const newNumber = `0${PhoneController.getRandomNumber(minimum, maximum)}`;
      if (phoneNumbers.indexOf(newNumber) > -1) {
        i--;
      } else {
        phoneNumbers.push(newNumber);
      }
    }
    phoneNumbers.sort((current, next) => (current - next));
    PhoneController.saveToFile(phoneNumbers);
    response.status(201).json({
      message: `${phoneNumbers.length} phone numbers successfully generated`,
      data: {
        phoneNumbers,
        minimumPhoneNumber: phoneNumbers[0],
        maximumPhoneNumber: phoneNumbers[phoneNumbers.length - 1],
      },
    });
  }

  static getRandomNumber(minimum, maximum) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
  }

  static saveToFile(phoneNumbers) {
    fs.writeFileSync('datastore.txt', phoneNumbers);
  }
}
