import { Request, Response } from "express";
import League from "../models/league.model"


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
    const { id } = req.params;
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
    }
   
} 

//Add a new league:
export const postLeague = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await League.create(body);

        res.json({
            msg: 'League added'
        })
    } catch (error){
        console.log(error);
        res.json({
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
        res.json({
            msg: 'Connect to support...'
        })
    }
   
   
}

