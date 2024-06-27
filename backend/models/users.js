const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import sequelize instance

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Enable timestamps
  createdAt: 'created_at', // Customize the name of the createdAt field
  updatedAt: 'updated_at', // Customize the name of the updatedAt field
});

module.exports = User
