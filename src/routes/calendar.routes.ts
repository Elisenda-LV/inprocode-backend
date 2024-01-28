import { Router } from 'express';
import { deleteMatch, getMatch, getMatches, postMatch, updateMatch } from '../controllers/calendar.controller';

const routerCalendar = Router();

routerCalendar.get('/', getMatches);
routerCalendar.get('/:id', getMatch);
routerCalendar.delete('/:id', deleteMatch);
routerCalendar.post('/', postMatch);
routerCalendar.put('/:id', updateMatch);


export default routerCalendar;