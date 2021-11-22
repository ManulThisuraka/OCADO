const { check, validationResult } = require("express-validator");

exports.signupValidator = [
    check('supplierName')
        .not().isEmpty()
        .trim()
        .withMessage('all fields are required'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('invalid email'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('password must be at least 6 charactors')
        .matches(/\d/)
        .withMessage('must contain a number')
];

exports.signinValidator = [
    check('_id')
        .not().isEmpty()
        .trim()
        .withMessage('all fields are required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('password must be at least 6 charactors')
        .matches(/\d/)
        .withMessage('must contain a number')
];

exports.productValidator = [
    check('itemCode')
        .not().isEmpty()
        .trim()
        .withMessage('all fields  required'),
];


exports.validatorResult = (req, res, next) => {
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();

    if (hasErrors) {
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMesssage: firstError
        });
        //console.log("hasErrors:", hasErrors);
        //console.log("result:", result);
    }

    next();
}
