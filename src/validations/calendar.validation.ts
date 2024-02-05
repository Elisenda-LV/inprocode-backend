import { check } from 'express-validator';

export const calendarValidators = [

    check('title')
        .exists()
        .withMessage("Title is required")
        .isString()
        .withMessage("Title should be a string")
        .isLength({ min: 5 })
        .withMessage("Title should be at least 5 characters"),

    check('start')
        .exists()
        .withMessage("Title is required")
        .isInt({ min: 1000, max: new Date().getDate() }) 
        .withMessage("Year should be a valid start"),

    check('location')
        .exists()
        .withMessage("Location is required")
        .isString()
        .withMessage("Location should be a string")
        .isLength({ min: 5 })
        .withMessage("Location should be at least 5 characters"),

]