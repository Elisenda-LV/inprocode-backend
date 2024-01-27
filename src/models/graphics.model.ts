import { DataTypes } from 'sequelize';
import db from '../config/db';

const Graphic = db.define('Graphic', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    club: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    goals: {
        type: DataTypes.INTEGER,
        allowNull: false,

    }

},{
    createdAt: false,
    updatedAt: false,
} );


export default Graphic;