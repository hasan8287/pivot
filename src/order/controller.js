const Model = require('./model');

const modelOrder = new Model();
const controller = {};


controller.getData = async (req, res) => {
  try {
    const data = await modelOrder.getDataWithPagination({
      limit: 100,
      page: 1,
    });

    return res.render('index', {
      title: 'Order',
      data: data.toJSON(),
      sub_titile: 'data order',
    });
  } catch (error) {
    return res.render('err', { message: error.message });
  }
};

module.exports = controller;
