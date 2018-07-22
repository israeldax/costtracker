module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define('Funcionario', {
        name: DataTypes.STRING,
    });

    return Funcionario;
}