const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/customers");

const { validateBody } = require("../../middlewares");

const { makeOrderSchema } = require("../../models/customers");

router.post("/", validateBody(makeOrderSchema), ctrl.makeOrder);

module.exports = router;
