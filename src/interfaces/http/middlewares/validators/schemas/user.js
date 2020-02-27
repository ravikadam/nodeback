import Joi from 'joi'

module.exports = {
  studentCreate: Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    name: Joi.string(),
    parentName: Joi.string(),
    mobile: Joi.string().regex(/\d{10}$/),
    grade: Joi.string(),
    courseLevelId: Joi.string()
  }),
  tutorCreate: Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    name: Joi.string().required(),
    mobile: Joi.string()
      .regex(/\d{10}$/)
      .required(),
    courseLevelId: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
  }),
  update: Joi.object().keys({
    username: Joi.string()
      .min(3)
      .optional()
  }),
  login: Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string().required()
  })
}
