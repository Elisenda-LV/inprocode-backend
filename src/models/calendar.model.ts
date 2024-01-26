import { DataTypes } from 'sequelize';
import db from '../config/db';

const Calendar = db.define('Calendar', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    start:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  
},{
    createdAt: false,
    updatedAt: false,
});

export default Calendar;