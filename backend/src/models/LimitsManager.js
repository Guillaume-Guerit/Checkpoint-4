const AbstractManager = require("./AbstractManager");

class LimitsManager extends AbstractManager {
  static table = "Limits";

  insert(Limits) {
    return this.connection.query(
      `insert into ${LimitsManager.table} (title) values (?)`,
      [Limits.title]
    );
  }

  update(Limits) {
    return this.connection.query(
      `update ${LimitsManager.table} set title = ? where id = ?`,
      [Limits.title, Limits.id]
    );
  }

  FindAllForLimits() {
    return this.connection.query(
      `select l.idLimits, l.title as MainTitle, le.idLimits_Elements, le.Title, le.Text, le.ImageLink, le.ImageAlt from Limits as l inner join Limits_Elements as le`
    );
  }
}

module.exports = LimitsManager;
