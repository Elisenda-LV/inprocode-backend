import { Response, Request } from "express";
import Calendar from "../models/calendar.model";



//Show events:

export const getMatches = async (req: Request, res: Response) => {
    const matches = await Calendar.findAll()

    res.status(200).json(matches)
}


//Show event by id:

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

//Delete event:

export const deleteMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const match = await Calendar.findByPk(id);

    if(match){
        await match.destroy();
        res.json({
            msg: 'Match deleted'
        })

    } else {
        res.status(404).json({
            msg: `There is no match with that id ${id}`
        })
    }
}


//Add a new event:

export const postMatch = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Calendar.create(body);
        res.json({
            msg: 'Match added'
        })

    } catch (error){
        console.log(error);
        res.json({
            msg: 'Connect to support...'
        })
    }
}


//Edit event:
export const updateMatch = async  (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const match = await Calendar.findByPk(id);

        if(match){
            await match.update(body);
            res.json({
                msg: 'Match Updated'
            })

        } else {
            res.status(404).json({
                msg: `There is no match with that id ${id}`
            })

        }

    } catch(error) {
        console.log(error);
        res.json({
            msg: 'Connect to support...'
        })
    }


}