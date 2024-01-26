import Map from '../models/map.model';
import { Request, Response } from 'express';


//Show markers:
export const getMarkers = async (req: Request, res: Response) => {
   //try{
        const maps = await Map.findAll()
        res.status(200).json(maps)
   
   /*  } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Error to show markers' });
   } */

}

