const { ctrlWrapper, transport } = require("../helpers");
require("dotenv").config();

const { HOST_EMAIL, OWNER_EMAIL } = process.env;

const makeOrder = async (req, res) => {
  const { email, number, description } = req.body;

  const emailOptions = {
    from: HOST_EMAIL,
    to: OWNER_EMAIL,
    subject: "Новая заявка",
    html: `<div>
            <p>Почта: ${email}</p>
            <p>Телефон: ${number}</p>
            <p>Описание: ${description || "Отсутствует"}</p>
          </div>`,
  };

  transport.sendMail(emailOptions);

  res.status(200).json({
    message: "Success",
  });
};

module.exports = {
  makeOrder: ctrlWrapper(makeOrder),
};
