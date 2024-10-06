import joi from 'joi'
import { generalFields } from '../../middleware/validation.js'


export const signUpUser = joi.object({
    username: joi.string().min(2).max(50).required().messages({
        'string.empty': 'Username is required',
        'string.min': 'Username must be at least 2 characters long',
        'string.max': 'Username must be at most 50 characters long'
    }),
    password: joi.string()
        .pattern(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.pattern.base': 'Password must contain at least one letter, one number, and be at least 7 characters long'
        }),
    role: joi.string()
        .valid('organization', 'Parent')
        .default('organization')
        .required()
        .messages({
            'any.only': 'Role must be either "organization" or "Parent"',
        })
}).required()



export const loginUser = joi.object({
    username: joi.string().min(2).max(50).required().messages({
        'string.empty': 'Username is required',
        'string.min': 'Username must be at least 2 characters long',
        'string.max': 'Username must be at most 50 characters long'
    }),
    password: joi.string()
        .pattern(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.pattern.base': 'Password must contain at least one letter, one number, and be at least 7 characters long'
        }),
}).required()


export const signUpOrganizationSchema = joi.object({
    organizationName: joi.string().min(2).max(100).required().messages({
        'string.empty': 'Organization name is required',
        'string.min': 'Organization name must be at least 2 characters long',
        'string.max': 'Organization name must be at most 100 characters long'
    }),
    email: joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'org'] }
    }).required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Please provide a valid email address'
    }),
    password: joi.string()
        .pattern(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.pattern.base': 'Password must contain at least one letter, one number, and be at least 7 characters long'
        }),
    confirmPassword: joi.string()
        .valid(joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Confirm password must match the password',
            'string.empty': 'Confirm password is required'
        }),
    governorate: joi.string().required().messages({
        'string.empty': 'Governorate is required'
    }),
    address: joi.string().required().messages({
        'string.empty': 'Address is required'
    }),
    adminName: joi.string().min(2).max(50).required().messages({
        'string.empty': 'Admin name is required',
        'string.min': 'Admin name must be at least 2 characters long',
        'string.max': 'Admin name must be at most 50 characters long'
    }),
    userName: joi.string().min(2).max(50).required().messages({
        'string.empty': 'user name is required',
        'string.min': 'user name must be at least 2 characters long',
        'string.max': 'user name must be at most 50 characters long'
    }),
    adminJob: joi.string().min(2).max(50).required().messages({
        'string.empty': 'Admin job title is required',
        'string.min': 'Admin job title must be at least 2 characters long',
        'string.max': 'Admin job title must be at most 50 characters long'
    }),
    phoneNumber: joi.string().pattern(/^[0-9]{10,15}$/).required().messages({
        'string.empty': 'Phone number is required',
        'string.pattern.base': 'Phone number must contain between 10 to 15 digits'
    }),
    socialMediaLinks: joi.string().allow('', null).messages({
        'string.empty': 'Social media links should be a valid string'
    }),
    // organizationLogo: joi.string().required().messages({
    //     'string.empty': 'Organization logo is required'
    // }),
    typeOfOrganization: joi.string().valid('school', 'academy').required().messages({
        'any.only': 'Type of organization must be either school or academy',
        'string.empty': 'Type of organization is required'
    }),
    schoolName: joi.string().optional().allow(''),
    academyName: joi.string().optional().allow(''),
    comment: joi.string().optional().allow(''),
});


export const loginOrganizationSchema = joi.object({
    emailOrUsername: joi.string().required().messages({
        'string.empty': 'Email or Username is required',
    }),
    password: joi.string()
        .min(7)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 7 characters long'
        })
}).required();



export const signUpParentSchema = joi.object({
    parentName: joi.string().min(2).max(50).required().messages({
        'string.empty': 'Parent name is required',
        'string.min': 'Parent name must be at least 2 characters long',
        'string.max': 'Parent name must be at most 50 characters long',
        'any.required': 'Parent name is required'
    }),
    studentName: joi.string().min(2).max(50).required().messages({
        'string.empty': 'Student name is required',
        'string.min': 'Student name must be at least 2 characters long',
        'string.max': 'Student name must be at most 50 characters long',
        'any.required': 'Student name is required'
    }),
    studentAge: joi.number().min(1).max(100).required().messages({
        'number.base': 'Student age must be a valid number',
        'number.min': 'Student age must be at least 1',
        'number.max': 'Student age must be at most 100',
        'any.required': 'Student age is required'
    }),
    studentEmail: joi.string().email().required().messages({
        'string.empty': 'Student email is required',
        'string.email': 'Please provide a valid email address',
        'any.required': 'Student email is required'
    }),
    phoneNumber: joi.string().pattern(/^[0-9]{10,15}$/).required().messages({
        'string.empty': 'Phone number is required',
        'string.pattern.base': 'Phone number must be between 10 to 15 digits long',
        'any.required': 'Phone number is required'
    }),
    governorate: joi.string().required().messages({
        'string.empty': 'Governorate is required',
        'any.required': 'Governorate is required'
    }),
    is_studying_programming_robotic: joi.boolean().required().messages({
        'any.required': 'Please select whether the student is studying programming/robotics'
    }),
    academyName: joi.string().min(2).max(100).required().messages({
        'string.empty': 'Academy name is required',
        'string.min': 'Academy name must be at least 2 characters long',
        'string.max': 'Academy name must be at most 100 characters long',
        'any.required': 'Academy name is required'
    }),
    wants_contact_academy: joi.boolean().required().messages({
        'any.required': 'Please indicate whether you want to get in touch with the academy'
    }),
    preferred_studying_type: joi.string().valid('Online', 'Offline').required().messages({
        'any.required': 'Preferred studying type is required',
        'any.only': 'Please select either "Online" or "Offline" for the studying type'
    }),
    comments: joi.string().optional().allow('').messages({
        'string.empty': 'Comments cannot be empty'
    })
});



export const confirmAccountValidation = joi.object({

    token: generalFields.token,
}).required()


export const sendCodeValidation = joi.object({
    emailOrUsername: joi.string().required().messages({
        'string.empty': 'Email or Username is required',
    }),
}).required()




export const forgetPasswordValidation = joi.object({
    emailOrUsername: joi.string().required().messages({
        'string.empty': 'Email or Username is required',
    }),
    password: joi.string()
        .pattern(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.pattern.base': 'Password must contain at least one letter, one number, and be at least 7 characters long'
        }),

    confirmPassword: joi.string()
        .valid(joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Confirm password must match the password',
            'string.empty': 'Confirm password is required'
        }),
    code: joi.number().integer().min(100000).max(999999).required().messages({
        'number.base': 'Code should be a valid number.',
        'number.integer': 'Code must be an integer.',
        'number.min': 'Code must be at least 6 digits long.',
        'number.max': 'Code cannot exceed 6 digits.',
        'any.required': 'Code is a required field.',
    }),
});