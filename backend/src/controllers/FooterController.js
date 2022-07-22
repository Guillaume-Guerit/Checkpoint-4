/* eslint-disable no-param-reassign */
const models = require("../models");

class FooterController {
  static browse = (req, res) => {
    models.Footer.findAll()
      .then(([rows]) => {
        models.navigation.findAllLinks().then(([links]) => {
          rows[0].links = links;
          models.Footer.findImageForFooter().then(([image]) => {
            rows[0].image = image;
            res.send(rows[0]);
          });
        });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.Footer.find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const Footer = req.body;

    // TODO validations (length, format...)

    Footer.id = parseInt(req.params.id, 10);

    models.Footer.update(Footer)
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
    const Footer = req.body;

    // TODO validations (length, format...)

    models.Footer.insert(Footer)
      .then(([result]) => {
        res.status(201).send({ ...Footer, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.Footer.delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = FooterController;
