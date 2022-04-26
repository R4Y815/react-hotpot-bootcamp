export default function initFriendModel(sequelize, DataTypes) {
  return sequelize.define('friend', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
    },
    amount: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    billId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  { underscored: true });
}
