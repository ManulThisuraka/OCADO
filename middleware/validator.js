const { check ,validatorResult, validationResult} = require('express-validator');





exports.signupValidator =[
    check('firstname')
            .not().isEmpty()
            .trim()
            .withMessage('All fields required'),
    check('lastname')
            .not().isEmpty()
            .trim()
            .withMessage('All fields required'),
    check('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('Invaild E-mail'),
    check('contactnumber')
            
            .isLength({min:10 , max:10})
            .withMessage('Invaild Contact Number'),
    check('username')
            .not().isEmpty()
            .trim()
            .withMessage('All fields required'),
    check('password')
            .isLength({min:6})
            .withMessage('Password must be at least 6 characters long'),
];

exports.signinValidator =[

        check('email')
                .isEmail()
                .normalizeEmail()
                .withMessage('Invaild E-mail'),
        check('password')
                .isLength({min:6})
                .withMessage('Password must be at least 6 characters long'),
    ];



exports.validatorResult =(req,res,next)=>{


    const result =validationResult(req);
    const hasErrors=!result.isEmpty();
    if(hasErrors){
        const firstError=result.array()[0].msg;
        return res.status(400).json({
                errorMessage:firstError,
        });




        //console.log('hasErrors:',hasErrors);
       // console.log('result:',result);

    }


    next();
};