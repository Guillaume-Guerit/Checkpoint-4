const AbstractManager = require("./AbstractManager");

class AdminMailManager extends AbstractManager {
  static table = "Admin";

  insert(Admin) {
    return this.connection.query(
      `INSERT INTO ${AdminMailManager.table} (idAdmin, AdminMail, AdminPassword) values (?, ?, ?)`,
      [Admin.idAdmin, Admin.AdminMail, Admin.AdminPassword]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${AdminMailManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  findByMail(AdminMail) {
    return this.connection
      .query(`select * from ${AdminMailManager.table} where AdminMail = ?`, [
        AdminMail,
      ])
      .then((user) => user[0]);
  }
}

module.exports = AdminMailManager;
