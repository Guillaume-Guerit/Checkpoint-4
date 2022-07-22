const express = require("express");
const { Authorization } = require("./Services/User");
const { VerifyEmail } = require("./Services/Verify");

const {
  ItemController,
  HomeController,
  LimitsController,
  LimitsDetailsController,
  NavigationController,
  ContactController,
  LoginController,
  FooterController,
  MailerController,
  AdminMailController,
  UserController,
} = require("./controllers");

const router = express.Router();

router.post("/sendEmail", MailerController.sendMail);

router.get("/email", AdminMailController.find);
router.put("/email", Authorization, AdminMailController.edit);
router.post("/user/login", VerifyEmail, UserController.login);
router.get("/checkuser/:email", VerifyEmail, UserController.read);
router.post("/user/create", UserController.add);
router.get("/checkuser", Authorization, UserController.browse);
router.get("/checkuser/:email", VerifyEmail, UserController.read);
router.get("/user/logout", Authorization, UserController.logout);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/homes", HomeController.browse);
router.put("/homeput", HomeController.edit);

router.get("/limits", LimitsController.browse);

router.get("/limitsdetails", LimitsDetailsController.browse);
router.get("/limitsdetails/:id", LimitsDetailsController.read);
router.post("/limitsdetailspost", LimitsDetailsController.add);
router.delete("/limitsdetailsdelete/:id", LimitsDetailsController.delete);
router.post("/comments", LimitsDetailsController.addComment);

router.get("/navigation", NavigationController.browse);

router.get("/contact", ContactController.browse);

router.get("/login", LoginController.browse);

router.get("/footer", FooterController.browse);

module.exports = router;
