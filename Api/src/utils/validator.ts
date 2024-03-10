import { NextFunction, Request, Response } from "express"
import { body, ValidationChain, validationResult } from "express-validator"

const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (const validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                // If validation fails, return the errors
                return res.status(422).json({ errors: result.array() });
            }
        }
        // If there are no validation errors, continue to the next middleware
        next();
    };
};


const signUpValidator = [
    body("name").notEmpty().withMessage("name is required"),
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 8 }).withMessage("Password should contain at least 8 caracteres"),
]

const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 8 }).withMessage("Password should contain at least 8 caracteres"),
]

export { validate, signUpValidator, loginValidator };