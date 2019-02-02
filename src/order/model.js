const { db: database } = require('./../core/database');

class ModelOrder extends database.Model {
  // eslint-disable-next-line class-methods-use-this
  get tableName() {
    return 'order';
  }

  // eslint-disable-next-line class-methods-use-this
  get idAttribute() {
    return 'id';
  }

  /**
   * get all data order
   * @param{{page: int, limit: int}}
   */
  getDataWithPagination(param) {
    return this.orderBy('id').fetchPage({
      pageSize: parseInt(param.limit, 10),
      page: parseInt(param.page, 10),
    });
  }
}

module.exports = ModelOrder;
