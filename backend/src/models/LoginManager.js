const AbstractManager = require("./AbstractManager");

class LoginManager extends AbstractManager {
  static table = "Login";

  insert(Login) {
    return this.connection.query(
      `insert into ${LoginManager.table} (title) values (?)`,
      [Login.title]
    );
  }

  update(Login) {
    return this.connection.query(
      `update ${LoginManager.table} set title = ? where id = ?`,
      [Login.title, Login.id]
    );
  }
}

module.exports = LoginManager;
