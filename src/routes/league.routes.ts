import { Router } from "express";
import { deleteLeague, getLeague, getLeagues, postLeague, updateLeague } from "../controllers/league.controller";

const router = Router();

router.get('/', getLeagues);
router.get('/:id', getLeague);
router.delete('/:id', deleteLeague);
router.post('/', postLeague);
router.put('/:id', updateLeague);


export default router;