const AbstractManager = require("./AbstractManager");

class ContactManager extends AbstractManager {
  static table = "Contact";

  insert(Contact) {
    return this.connection.query(
      `insert into ${ContactManager.table} (title) values (?)`,
      [Contact.title]
    );
  }

  update(Contact) {
    return this.connection.query(
      `update ${ContactManager.table} set title = ? where id = ?`,
      [Contact.title, Contact.id]
    );
  }
}

module.exports = ContactManager;
