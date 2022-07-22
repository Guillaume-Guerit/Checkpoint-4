const AbstractManager = require("./AbstractManager");

class NavigationManager extends AbstractManager {
  static table = "navigation";

  insert(Navigation) {
    return this.connection.query(
      `insert into ${NavigationManager.table} (title) values (?)`,
      [Navigation.title]
    );
  }

  update(Navigation) {
    return this.connection.query(
      `update ${NavigationManager.table} set title = ? where id = ?`,
      [Navigation.title, Navigation.id]
    );
  }

  findAllLinks() {
    return this.connection.query(`select * from navlink`);
  }
}

module.exports = NavigationManager;
