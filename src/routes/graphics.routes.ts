import { Router } from 'express';
import { showGraphics } from '../controllers/graphic.controller';

const routerGraphics = Router();

routerGraphics.get('/', showGraphics);

export default routerGraphics;