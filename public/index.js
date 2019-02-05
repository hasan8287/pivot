
// eslint-disable-next-line no-unused-vars
function build(dataOrder) {
  const dataItem = [];
  dataOrder.forEach((entrie) => {
    if (dataItem.indexOf(entrie.item) < 0) {
      dataItem.push(entrie.item);
    }
  });

  dataItem.sort();
  const newData = [];
  dataOrder.forEach((entrie) => {
    dataItem.forEach((entrieItem) => {
      if (entrieItem === entrie.item) {
        // eslint-disable-next-line no-param-reassign
        entrie[entrieItem] = entrie.quantity;
      } else {
        // eslint-disable-next-line no-param-reassign
        entrie[entrieItem] = 0;
      }
    });
    newData.push(entrie);
  });

  return {
    dataItem,
    newData,
  };
}

module.exports = build;
