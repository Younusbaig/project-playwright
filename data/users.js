module.exports = {
  validUser: {
    email: process.env.TEST_EMAIL,
    password: process.env.TEST_PASSWORD,
  },
  invalidUser: {
    email: 'wronguser@gmail.com',
    password: 'wrong@1234',
  },
};
