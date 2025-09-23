import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().max(100).required(),
    description: Joi.string().required(),
    stock: Joi.number().integer().min(0).required(),
    price: Joi.number().precision(2).min(0).required(),
}); 

export default productSchema;