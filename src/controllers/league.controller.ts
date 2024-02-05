import { Request, Response } from "express";
import League from "../models/league.model"
import { validationResult } from 'express-validator';


//CRUD:

//Show Leagues: 

export const getLeagues = async (req: Request, res: Response) => {
    const leagues = await League.findAll()
   
    res.status(200).json(leagues)
}

//Show league by id:

export const getLeague = async(req: Request, res: Response) => {
    const { id } = req.params;
    const league = await League.findByPk(id);

    if(league){
        res.status(200).json(league)
    }else{
        res.status(404).json({
            msg: `There is no league with that id ${id}`
        })
    }

}

//Delete league:

export const deleteLeague = async (req: Request, res: Response) => {
   /*  const { id } = req.params;
    const league = await League.findByPk(id);

    if(league){
        await league.destroy();
        res.json({
            msg: 'League deleted'
        })
        
    } else {
        res.status(404).json({
            msg: `There is no league with that id ${id}`
        })
    } */

    try {
        const { id } = req.params;
        const errors = validationResult(req);

        //If there are validation errors, respond with a 400 Bad Request status.

        if(!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() });

        } else {
            const league = await League.findByPk(id);
            await league!.destroy();
            res.json({
                msg: 'League deleted'
            })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Connect to support...'
        })


    }
   
} 

//Add a new league:

export const postLeague = async (req: Request, res: Response) => {

    try {
        const errors = validationResult(req);

        //If there are validation errors, respond with a 400 Bad Request status.
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        } else {
            const { body } = req;
            await League.create(body);

            res.json({
                msg: 'League added',
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

//Update league:
export const updateLeague = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const league = await League.findByPk(id);
    
        if(league){
            await league.update(body);
            res.json({
                msg: 'League updated!'
            })
    
        } else {
            res.status(404).json({
                msg: `There is no league with that id ${id}`
            })
        }

    } catch (error){
        console.log(error);
        res.status(500).json({
            msg: 'Connect to support...'
        })
    }
   
   
}

