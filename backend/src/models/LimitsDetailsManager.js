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
}

module.exports = LimitsDetailsManager;
