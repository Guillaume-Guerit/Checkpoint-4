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

  findAllForNavigation() {
    return this.connection.query(
      `select n.idNavigation, n.ImageLink, n.ImageAlt, ne.idNavLink, ne.LinkLabel, ne.LinkPath, nee.idNavLink as idNavLink2, nee.LinkLabel as LinkLabel2, nee.LinkPath as LinkPath2, neee.idNavLink as idNavLink3, neee.LinkLabel as LinkLabel3, neee .LinkPath as LinkPath3 from Navigation as n inner join navlink as ne inner join navlink as nee inner join navlink as neee`
    );
  }
}

module.exports = NavigationManager;
