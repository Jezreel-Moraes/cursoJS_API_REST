"use strict";const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "user 1",
          email: "newUser1@gmail.com",
          password_hash: await bcryptjs.hash("senha123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "user 2",
          email: "newUser2@gmail.com",
          password_hash: await bcryptjs.hash("senha123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "user 3",
          email: "newUser3@gmail.com",
          password_hash: await bcryptjs.hash("senha123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "user 4",
          email: "newUser4@gmail.com",
          password_hash: await bcryptjs.hash("senha123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "user 5",
          email: "newUser5@gmail.com",
          password_hash: await bcryptjs.hash("senha123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "user 6",
          email: "newUser6@gmail.com",
          password_hash: await bcryptjs.hash("senha123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {
    console.log("nothing");
  },
};
