const { faker } = require('@faker-js/faker');

function createNewUser() {
  return {
    email: `qa_${Date.now()}_${Math.floor(Math.random() * 10000)}@example.com`,
    password: 'Test@1234',
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };
}

module.exports = { createNewUser };