module.exports = {
  validUser: {
    email: process.env.TEST_EMAIL,
    password: process.env.TEST_PASSWORD,
  },
  invalidUser: {
    email: 'wronguser.com',
    password: 'wrong',
  },
};
