const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false, // Change to false if name is required
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

    }, {
        tableName: 'users', // Ensure this matches your actual table name in the database
        timestamps: true, // Automatically includes createdAt and updatedAt fields
    });
    
    return User;
};
