
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('order').del()
    .then(function () {
      // Inserts seed entries
      return knex('order').insert([
        {id: 1, first_name: 'fuad', last_name: 'hasan', email: 'hasan@gmail.com', item: 'Barang1', quantity: 2, price: 10000},
        {id: 2, first_name: 'ahmad', last_name: 'hadi', email: 'ahmad@gmail.com', item: 'Barang2', quantity: 1, price: 4000},
        {id: 3, first_name: 'irman', last_name: 'nur', email: 'nur@gmail.com', item: 'Barang1', quantity: 4, price: 10000},
        {id: 4, first_name: 'mail', last_name: 'simail', email: 'simail@gmail.com', item: 'Barang3', quantity: 1, price: 70000},
        {id: 5, first_name: 'lisa', last_name: 'lis', email: 'lisa@gmail.com', item: 'Barang1', quantity: 2, price: 9000},
        {id: 6, first_name: 'amdre', last_name: 'amd', email: 'amdre@gmail.com', item: 'Barang4', quantity: 6, price: 8000},
        {id: 7, first_name: 'mahmud', last_name: 'mud', email: 'mahmud@gmail.com', item: 'Barang1', quantity: 3, price: 60000},
        {id: 8, first_name: 'mimin', last_name: 'min', email: 'mimin@gmail.com', item: 'Barang1', quantity: 1, price: 10000},
        {id: 9, first_name: 'sukma', last_name: 'ma', email: 'sukma@gmail.com', item: 'Barang5', quantity: 2, price: 12000},
        {id: 10, first_name: 'faizal', last_name: 'zal', email: 'faizal@gmail.com', item: 'Barang1', quantity: 1, price: 10000},
      ]);
    });
};
