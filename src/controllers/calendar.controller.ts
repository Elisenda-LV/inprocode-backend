import { Response, Request } from "express";
import Calendar from "../models/calendar.model";
import { validationResult } from 'express-validator';



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
    try {
        const { id } = req.params;
        const errors = validationResult(req);

        //If there are validation errors, respond with a 400 Bad Request status.

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        } else {
            const league = await Calendar.findByPk(id);
            await league!.destroy();
            res.json({
                msg: 'Event deleted'
            })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Connect to support...'
        })


    }
}


//Add a new event:

export const postMatch = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        //If there are validation errors, respond with a 400 Bad Request status.

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        } else {
            const { body } = req;
            await Calendar.create(body);

            res.json({
                msg: 'Event added',
                data: body,
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
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