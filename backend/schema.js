import Joi from "joi";

const postSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(10).required(),
  author: Joi.string().alphanum().min(3).max(30),
  tags: Joi.array().items(Joi.string()),
  isPublished: Joi.boolean().default(false),
  createdAt: Joi.date().default(Date.now),
});
