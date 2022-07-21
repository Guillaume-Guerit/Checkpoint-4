const AbstractManager = require("./AbstractManager");

class LimitsDetailsManager extends AbstractManager {
  static table = "limits_details";

  insert(LimitsDetails) {
    return this.connection.query(
      `insert into ${LimitsDetails.table} (title) values (?)`,
      [LimitsDetails.title]
    );
  }

  update(LimitsDetails) {
    return this.connection.query(
      `update ${LimitsDetails.table} set title = ? where id = ?`,
      [LimitsDetails.title, LimitsDetails.id]
    );
  }
}

module.exports = LimitsDetailsManager;
