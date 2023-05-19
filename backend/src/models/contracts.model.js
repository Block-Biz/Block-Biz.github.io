module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define("contract", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date_signed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buyer: {
      type: DataTypes.STRING,
    },
    seller: {
      type: DataTypes.STRING,
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    buyer_representative: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    seller_representative: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    percentage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Contract;
};
