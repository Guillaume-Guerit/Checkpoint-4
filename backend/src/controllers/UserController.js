/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
const models = require("../models");
const { hashPassword, jwtSign, passwordVerify } = require("../Services/User");

class UserController {
  static browse = (req, res) => {
    models.Admin.findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.Admin.findByMail(req.params.email)
      .then(([rows]) => {
        models.navigation
          .findNavigationAll(rows[0].languages_id)
          .then((result) => {
            rows[0].links = result[0];
            res.status(200).json(rows[0]);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const Admin = req.body;

    // TODO validations (length, format...)

    Admin.id = parseInt(req.params.id, 10);

    models.Admin.update(Admin)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    console.warn(hashPassword(req.body.password));
    return hashPassword(req.body.password).then((hashedPassword) => {
      const Admin = {
        AdminMail: req.body.email,
        AdminPassword: hashedPassword,
      };
      models.Admin.insert(Admin)
        .then(() => {
          res.status(201).send({ ...Admin });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    });
  };

  static delete = (req, res) => {
    models.Admin.delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static logout = (req, res) => {
    return res.clearCookie("access_token").Status(200).send("logout done!");
  };

  static login = async (req, res) => {
    try {
      const Admin = await models.Admin.findByMail(req.body.email);
      if (!Admin[0]) {
        return res.status(401).send({
          error: "Invalid credentials",
        });
      }
      const { AdminMail, AdminPassword } = Admin[0];
      const check = await passwordVerify(AdminPassword, req.body.password);
      if (!check) {
        return res.status(401).send({
          error: "Invalid credentials 2",
        });
      }
      const token = jwtSign({ AdminMail }, { expiresIn: "24h" });
      res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json(AdminMail);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  };
}

module.exports = UserController;
