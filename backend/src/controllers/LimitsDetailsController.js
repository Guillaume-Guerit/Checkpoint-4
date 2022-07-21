/* eslint-disable no-param-reassign */
const models = require("../models");

class LimitsDetailsController {
  static browse = (req, res) => {
    models.limits_details
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.limits_details
      .findLimitsDetails(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          models.Comments.findCommentByLimits(rows[0].idLimits_Details).then(
            ([result]) => {
              rows[0].comments = result;
              res.status(200).json(rows[0]);
            }
          );
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const LimitsDetails = req.body;

    // TODO validations (length, format...)

    LimitsDetails.id = parseInt(req.params.id, 10);

    models.LimitsDetails.update(LimitsDetails)
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
    const LimitsDetails = req.body;

    // TODO validations (length, format...)

    models.LimitsDetails.insert(LimitsDetails)
      .then(([result]) => {
        res.status(201).send({ ...LimitsDetails, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.LimitsDetails.delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = LimitsDetailsController;
