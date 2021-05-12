const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  adminSigninController,
  adminSignupController,
  getDataController,
} = require("../../controllers/admin/admin.controllers");
const { validationFunction } = require("../../services/admin/admin.services");
//routes
const adminAuth = require("../../middlewares/admin/admin.auth");

// signin
router.post(
  "/api/user/admin/signin",

  adminSigninController
);

// signup
router.post("/api/user/admin/signup", adminSignupController);

router.get("/api/getData", adminAuth, getDataController);
//export
module.exports = router;
