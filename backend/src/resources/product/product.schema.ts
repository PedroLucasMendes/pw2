import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(3).max(500).required(),
    stock: Joi.number().precision(2).integer().min(0).required(),
    price: Joi.number().precision(2).min(0).required(),
}); 

export default productSchema;