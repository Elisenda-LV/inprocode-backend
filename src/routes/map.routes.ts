import { Router } from 'express';
import { getMarkers } from '../controllers/map.controller';

const routerMap = Router();

routerMap.get('/', getMarkers);

export default routerMap;