import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
        'string.min' : 'Nome precisa ter mais de 3 caracteres.',
        'string.empty': 'Nome é obrigatório.'
    }),
    description: Joi.string().min(3).max(500).required().messages({
        'string.min' : 'Descrição precisa ter mais de 3 caracteres.',
        'string.empty': 'Descrição é obrigatória.'
    }),
    stock: Joi.number().precision(2).integer().min(0).required().messages({
        'number.min' : 'O valor do estoque precisa ser maior ou igual a zero.'
    }),
    price: Joi.number().precision(2).min(0).required().messages({
        'number.min' : 'O valor do preço precisa ser maior ou igual a zero.'
    }),
}); 

export default productSchema;