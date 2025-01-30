import { body } from "express-validator";
import { Priority } from "../models/enums/Priority.js";
import { Status } from "../models/enums/Status.js";
export const createValidator = [
    body("title")
        .not()
        .isEmpty()
        .withMessage("The task title is Manditory")
        .trim()
        .isString()
        .withMessage("Title needs to be in text format"),
    body("date")
        .not()
        .isEmpty()
        .withMessage("the task date is mandatory")
        .isString()
        .withMessage("The date needs to be a valid date format"),
    body("description")
        .trim()
        .isString()
        .withMessage("Description needs to be in text format"),
    body("priority")
        .trim()
        .isIn([Priority.high, Priority.normal, Priority.low])
        .withMessage("Priority can only normal,high or low"),
    body("status")
        .trim()
        .isIn([Status.todo, Status.inProgress, Status.complete])
        .withMessage("status can only todo,inProgress or completed"),
];
export const updateValidator = [
    body('id').not().isEmpty().withMessage('The task id is mandatory').trim().isString().withMessage('ID needs to be a valid uuid format'),
    body('status').trim().isIn([Status.complete, Status.todo, Status.inProgress])
];
