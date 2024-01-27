"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStadiums = exports.getMarkers = void 0;
const map_model_1 = __importDefault(require("../models/map.model"));
//Show markers:
const getMarkers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //try{
    const maps = yield map_model_1.default.findAll();
    res.status(200).json(maps);
});
exports.getMarkers = getMarkers;
//Show stadium by category:
const showStadiums = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { stadium } = req.params;
        const stadiums = yield map_model_1.default.findAll({
            where: {
                stadium: stadium,
            }
        });
        if (stadiums.length > 0) {
            res.status(200).json(stadiums);
        }
        else {
            res.status(404).json({
                msg: `There are no stadiums with this category ${stadium}`
            });
        }
    }
    catch (error) {
        console.error('Error fetching stadiums by category:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
exports.showStadiums = showStadiums;
