"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn("Users", "phoneNumber", {
            type: Sequelize.INTEGER,
            unique: true,
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn("Users", "phoneNumber", {
            type: Sequelize.INTEGER,
        })
    },
}
