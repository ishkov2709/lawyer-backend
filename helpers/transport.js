const nodemailer = require("nodemailer");
require("dotenv").config();

const { AUTH_PASS, HOST_EMAIL, HOST_NAME, HOST_SERVICE_PORT } = process.env;

const configOptions = {
  host: HOST_NAME,
  port: HOST_SERVICE_PORT,
  secure: true,
  auth: {
    user: HOST_EMAIL,
    pass: AUTH_PASS,
  },
};

const transport = nodemailer.createTransport(configOptions);

module.exports = transport;
