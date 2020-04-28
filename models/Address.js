module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define(
        'Address',
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            zip: DataTypes.INTEGER
        },
        {}
    );

    Address.associate = (models) => {
        Address.belongsTo(models.User);
    };

    return Address;
};
