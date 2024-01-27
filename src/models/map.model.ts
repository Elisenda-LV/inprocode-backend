import { DataTypes } from "sequelize";
import db from "../config/db";

const Map = db.define('Map', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    club: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stadium: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
},{
    createdAt: false,
    updatedAt: false,
});


export default Map;


