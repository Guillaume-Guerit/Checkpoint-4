const AbstractManager = require("./AbstractManager");

class FooterManager extends AbstractManager {
  static table = "Footer";

  insert(Footer) {
    return this.connection.query(
      `insert into ${FooterManager.table} (title) values (?)`,
      [Footer.title]
    );
  }

  update(Footer) {
    return this.connection.query(
      `update ${FooterManager.table} set title = ? where id = ?`,
      [Footer.title, Footer.id]
    );
  }

  findAllForFooter() {
    return this.connection.query(
      `select f.FirstName, f.LastName, f.email, f.phone, ne.idNavLink, ne.LinkLabel, ne.LinkPath, nee.idNavLink as idNavLink2, nee.LinkLabel as LinkLabel2, nee.LinkPath as LinkPath2, neee.idNavLink as idNavLink3, neee.LinkLabel as LinkLabel3, neee .LinkPath as LinkPath3 from Footer as f inner join navlink as ne inner join navlink as nee inner join navlink as neee`
    );
  }
}

module.exports = FooterManager;
