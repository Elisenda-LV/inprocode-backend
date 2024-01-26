import { Response, Request } from "express";
import Calendar from "../models/calendar.model";



//Show Matches

export const getMatches = async (req: Request, res: Response) => {
    const matches = await Calendar.findAll()

    res.status(200).json(matches)
}


//Show Match by id:

export const getMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const match = await Calendar.findByPk(id);

    if(match){
        res.status(200).json(match)
    }else{
        res.status(404).json({
            msg: `There is no match with that id ${id}`
        })
    }

    
}