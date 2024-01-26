import { Router } from 'express';
import { getMatch, getMatches } from '../controllers/calendar.controller';

const routerCalendar = Router();

routerCalendar.get('/', getMatches);
routerCalendar.get('/', getMatch);


export default routerCalendar;