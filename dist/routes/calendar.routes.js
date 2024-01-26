"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calendar_controller_1 = require("../controllers/calendar.controller");
const routerCalendar = (0, express_1.Router)();
routerCalendar.get('/', calendar_controller_1.getMatches);
routerCalendar.get('/', calendar_controller_1.getMatch);
exports.default = routerCalendar;
