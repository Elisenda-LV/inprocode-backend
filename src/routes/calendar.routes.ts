import { Router } from 'express';
import { deleteMatch, getMatch, getMatches, postMatch, updateMatch } from '../controllers/calendar.controller';
import { idValidator } from "../validations/generic.validation"; 
import { calendarValidators } from '../validations/calendar.validation'; 

const routerCalendar = Router();

routerCalendar.get('/', getMatches);
routerCalendar.get('/:id', idValidator, getMatch);
routerCalendar.delete('/:id',idValidator, deleteMatch);
routerCalendar.post('/', calendarValidators, postMatch);
routerCalendar.put('/:id', idValidator, calendarValidators, updateMatch);


export default routerCalendar;