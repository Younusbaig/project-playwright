const { faker } = require('@faker-js/faker');

function createNewUser() {
  return {
    email: faker.internet.email({ provider: `test${Date.now()}.com` }).toLowerCase(),
    password: process.env.TEST_PASSWORD,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };
}

module.exports = { createNewUser };