const { faker } = require('@faker-js/faker');

function createNewUser() {
  return {
    email: `qa_${Date.now()}_${Math.floor(Math.random() * 10000)}@example.com`,
    password: process.env.TEST_PASSWORD,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };
}

module.exports = { createNewUser };