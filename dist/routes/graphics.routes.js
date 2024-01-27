"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const graphic_controller_1 = require("../controllers/graphic.controller");
const routerGraphics = (0, express_1.Router)();
routerGraphics.get('/', graphic_controller_1.showGraphics);
exports.default = routerGraphics;
