"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const league_controller_1 = require("../controllers/league.controller");
const generic_validation_1 = require("../validations/generic.validation");
const league_validation_1 = require("../validations/league.validation");
const router = (0, express_1.Router)();
router.get('/', league_controller_1.getLeagues);
router.get('/:id', generic_validation_1.idValidator, league_controller_1.getLeague);
router.delete('/:id', generic_validation_1.idValidator, league_controller_1.deleteLeague);
router.post('/', league_validation_1.leagueValidator, league_controller_1.postLeague);
router.put('/:id', generic_validation_1.idValidator, league_validation_1.leagueValidator, league_controller_1.updateLeague);
exports.default = router;
