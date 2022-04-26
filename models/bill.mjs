export default function initBillModel(sequelize, DataTypes) {
  return sequelize.define('bill', {
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
    total: {
      allowNull: false,
      type: DataTypes.DECIMAL,
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
