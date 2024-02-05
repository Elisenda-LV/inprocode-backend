import { Router } from "express";
import { deleteLeague, getLeague, getLeagues, postLeague, updateLeague } from "../controllers/league.controller";
import { idValidator } from "../validations/generic.validation"; 
import { leagueValidator } from "../validations/league.validation"; 

const router = Router();

router.get('/', getLeagues);
router.get('/:id', idValidator, getLeague);
router.delete('/:id', idValidator, deleteLeague);
router.post('/', leagueValidator, postLeague);
router.put('/:id', idValidator, leagueValidator, updateLeague);


export default router;