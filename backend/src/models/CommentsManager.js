const AbstractManager = require("./AbstractManager");

class CommentsManager extends AbstractManager {
  static table = "Comments";

  insert(Comments) {
    return this.connection.query(
      `insert into ${CommentsManager.table} (title) values (?)`,
      [Comments.title]
    );
  }

  update(Comments) {
    return this.connection.query(
      `update ${CommentsManager.table} set title = ? where id = ?`,
      [Comments.title, Comments.id]
    );
  }

  findCommentByLimits(id) {
    return this.connection.query(
      `select * from ${CommentsManager.table} where Limits_Details_idLimits_Details = ?`,
      [id]
    );
  }
}

module.exports = CommentsManager;
