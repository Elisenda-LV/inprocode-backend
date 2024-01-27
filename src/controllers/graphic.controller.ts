import Graphic from '../models/graphics.model';
import { Response, Request } from 'express';


//Show data

export const showGraphics = async (req: Request, res: Response) => {
    const graphics = await Graphic.findAll();

    res.json(graphics)

}