const AbstractManager = require("./AbstractManager");

class LimitsDetailsManager extends AbstractManager {
  static table = "limits_details";

  insert(LimitsDetails) {
    return this.connection.query(
      `insert into ${LimitsDetails.table} (title) values (?)`,
      [LimitsDetails.title]
    );
  }

  insertLimitsElements(Limits) {
    return this.connection.query(
      `insert into Limits_Elements (Title, Text, ImageLink, ImageAlt) values (?, ?, ?, ?)`,
      [Limits.Title, Limits.Text, Limits.ImageLink, Limits.ImageAlt]
    );
  }

  insertLimitsDetails(Limits) {
    return this.connection.query(
      `insert into limits_details (Title, FirstText, SecondText, ThirdText, FirstImageLink, FirstImageAlt, SecondImageLink, SecondImageAlt, ThirdImageLink, ThirdImageAlt, FourthImageLink, FourthImageAlt) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Limits.Title,
        Limits.FirstText,
        Limits.SecondText,
        Limits.ThirdText,
        Limits.FirstImageLink,
        Limits.FirstImageAlt,
        Limits.SecondImageLink,
        Limits.SecondImageAlt,
        Limits.ThirdImageLink,
        Limits.ThirdImageAlt,
        Limits.FourthImageLink,
        Limits.FourthImageAlt,
      ]
    );
  }

  update(LimitsDetails) {
    return this.connection.query(
      `update ${LimitsDetails.table} set title = ? where id = ?`,
      [LimitsDetails.title, LimitsDetails.id]
    );
  }

  deleteLimistsElements(id) {
    return this.connection.query(
      `delete from Limits_Elements where idLimits_Elements = ?`,
      [id]
    );
  }

  deleteLimitsDetails(id) {
    return this.connection.query(
      `delete from limits_details where idLimits_Details = ?`,
      [id]
    );
  }

  addComment(comment) {
    return this.connection.query(
      `insert into comments (Limits_Details_idLimits_Details, NickName, Comment) values (?, ?, ?)`,
      [
        comment.Limits_Details_idLimits_Details,
        comment.NickName,
        comment.Comment,
      ]
    );
  }
}

module.exports = LimitsDetailsManager;
