import Joi from 'joi';

export const addTeamSchema = Joi.object({
    teamName: Joi.string().min(2).max(100).required().messages({
        'string.empty': 'Team name is required',
        'string.min': 'Team name must be at least 2 characters long',
        'string.max': 'Team name must be at most 100 characters long',
        'any.required': 'Team name is required'
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Please provide a valid email address',
        'any.required': 'Email is required'
    }),
    track: Joi.string().min(2).max(50).required().messages({
        'string.empty': 'Track is required',
        'string.min': 'Track must be at least 2 characters long',
        'string.max': 'Track must be at most 50 characters long',
        'any.required': 'Track is required'
    }),
    teamNumber: Joi.number().required().messages({
        'number.base': 'Team number must be a valid number',
        'any.required': 'Team number is required'
    }),
    // is_there_lecturer: Joi.boolean().required().messages({
    //     'any.required': 'Please indicate if there is a lecturer'
    // }),
    lecturerName: Joi.string().min(2).max(100).optional().allow('').messages({
        'string.min': 'Lecturer name must be at least 2 characters long',
        'string.max': 'Lecturer name must be at most 100 characters long',
        'string.empty': 'Lecturer name cannot be empty'
    }),
    students: Joi.array().items(
        Joi.object({
            student_name: Joi.string().min(2).max(100).required().messages({
                'string.empty': 'Student name is required',
                'string.min': 'Student name must be at least 2 characters long',
                'string.max': 'Student name must be at most 100 characters long',
                'any.required': 'Student name is required'
            }),
            email: Joi.string().email().required().messages({
                'string.empty': 'Student email is required',
                'string.email': 'Please provide a valid email address',
                'any.required': 'Student email is required'
            }),
            phone_number: Joi.string().pattern(/^[0-9]{10,15}$/).required().messages({
                'string.empty': 'Phone number is required',
                'string.pattern.base': 'Phone number must be between 10 to 15 digits long',
                'any.required': 'Phone number is required'
            }),
            date_of_birth: Joi.date().required().messages({
                'date.base': 'Date of birth must be a valid date',
                'any.required': 'Date of birth is required'
            })
        })
    ).min(1).required().messages({
        'array.min': 'At least one student is required',
        'any.required': 'Students are required'
    }),
    comment: Joi.string().optional().allow('').messages({
        'string.empty': 'Comment cannot be empty'
    })
});
