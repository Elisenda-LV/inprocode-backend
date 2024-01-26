import { Sequelize } from "sequelize";

const sequelize = new Sequelize('inprocode', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

export default sequelize;