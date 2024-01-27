import { Router } from 'express';
import { getMarkers, showStadiums } from '../controllers/map.controller';

const routerMap = Router();

routerMap.get('/', getMarkers);
routerMap.get('/stadiums/:stadium', showStadiums);

export default routerMap;