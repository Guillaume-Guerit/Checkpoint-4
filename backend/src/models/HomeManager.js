const AbstractManager = require("./AbstractManager");

class HomeManager extends AbstractManager {
  static table = "Home";

  insert(Home) {
    return this.connection.query(
      `insert into ${HomeManager.table} (title) values (?)`,
      [Home.title]
    );
  }

  update(Home) {
    return this.connection.query(
      `update ${HomeManager.table} set title = ? where id = ?`,
      [Home.title, Home.id]
    );
  }
}

module.exports = HomeManager;
