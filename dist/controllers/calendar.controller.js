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
exports.updateMatch = exports.postMatch = exports.deleteMatch = exports.getMatch = exports.getMatches = void 0;
const calendar_model_1 = __importDefault(require("../models/calendar.model"));
//Show events:
const getMatches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const matches = yield calendar_model_1.default.findAll();
    res.status(200).json(matches);
});
exports.getMatches = getMatches;
//Show event by id:
const getMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const match = yield calendar_model_1.default.findByPk(id);
    if (match) {
        res.status(200).json(match);
    }
    else {
        res.status(404).json({
            msg: `There is no match with that id ${id}`
        });
    }
});
exports.getMatch = getMatch;
//Delete event:
const deleteMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const match = yield calendar_model_1.default.findByPk(id);
    if (match) {
        yield match.destroy();
        res.json({
            msg: 'Match deleted'
        });
    }
    else {
        res.status(404).json({
            msg: `There is no match with that id ${id}`
        });
    }
});
exports.deleteMatch = deleteMatch;
//Add a new event:
const postMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield calendar_model_1.default.create(body);
        res.json({
            msg: 'Match added'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Connect to support...'
        });
    }
});
exports.postMatch = postMatch;
//Edit event:
const updateMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const match = yield calendar_model_1.default.findByPk(id);
        if (match) {
            yield match.update(body);
            res.json({
                msg: 'Match Updated'
            });
        }
        else {
            res.status(404).json({
                msg: `There is no match with that id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Connect to support...'
        });
    }
});
exports.updateMatch = updateMatch;
