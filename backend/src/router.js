const express = require("express");

const {
  ItemController,
  HomeController,
  LimitsController,
  LimitsDetailsController,
  NavigationController,
  ContactController,
  LoginController,
  FooterController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/homes", HomeController.browse);

router.get("/limits", LimitsController.browse);

router.get("/limitsdetails", LimitsDetailsController.browse);
router.get("/limitsdetails/:id", LimitsDetailsController.read);

router.get("/navigation", NavigationController.browse);

router.get("/contact", ContactController.browse);

router.get("/login", LoginController.browse);

router.get("/footer", FooterController.browse);

module.exports = router;
