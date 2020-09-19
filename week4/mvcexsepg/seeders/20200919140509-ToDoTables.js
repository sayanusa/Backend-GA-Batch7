'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {

   const parseData = JSON.parse(fs.readFileSync('./data.json'));
   const toDoListData = [];

   parseData.forEach(data => {  
    const { task, status } = data;
    toDoListData.push({
      task,
      status,
      createdAt : new Date(),
      updatedAt : new Date()
      //created_at : new Date(),
      //completed_at : new Date()
    })
  })
  await queryInterface.bulkInsert('ToDoTables', toDoListData, {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('ToDoTables', null, {})
  } 
};
