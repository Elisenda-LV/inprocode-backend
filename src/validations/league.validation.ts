import { check } from 'express-validator';


export const leagueValidator = [

    check('name')
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ min: 5 })
        .withMessage("Title should be at least 5 characters"),
    check('sport')
        .exists()
        .withMessage("Sport is required")
        .isString()
        .withMessage("Sport should be a string")
        .isLength({ min: 5 })
        .withMessage("Sport should be at least 5 characters"),
    check('category')
        .exists()
        .withMessage("Category is required")
        .isString()
        .withMessage("Category should be a string")
        .isLength({ min: 5 })
        .withMessage("Category should be at least 5 characters"),
    check('location')
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ min: 5 })
        .withMessage("Title should be at least 5 characters"),
        
]
