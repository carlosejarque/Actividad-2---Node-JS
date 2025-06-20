const Joi = require('joi');

exports.bookSchema = Joi.object({
  title: Joi.string().min(3).required(),
  author: Joi.string().required(),
  description: Joi.string().allow('', null),
  publishDate: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).optional()
});
