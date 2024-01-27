"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const map_controller_1 = require("../controllers/map.controller");
const routerMap = (0, express_1.Router)();
routerMap.get('/', map_controller_1.getMarkers);
routerMap.get('/stadiums/:stadium', map_controller_1.showStadiums);
exports.default = routerMap;
