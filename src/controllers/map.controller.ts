import Map from '../models/map.model';
import { Request, Response } from 'express';


//Show markers:
export const getMarkers = async (req: Request, res: Response) => {
   //try{
        const maps = await Map.findAll()
        res.status(200).json(maps)
   

}


//Show stadium by category:
export const showStadiums = async (req: Request, res: Response) => {
     try {
          const { stadium } = req.params;
          const stadiums = await Map.findAll({
              where: {
               stadium: stadium,
              }
          });

          if(stadiums.length > 0){
               res.status(200).json(stadiums)
          } else {
               res.status(404).json({
                    msg: `There are no stadiums with this category ${stadium}`
               });
          }

     } catch (error) {
          console.error('Error fetching stadiums by category:', error);
          res.status(500).json({ msg: 'Internal server error' });
     }
}

