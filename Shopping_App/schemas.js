const BaseJoi = require("joi");
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => {
    return {
        type: 'string',
        base: joi.string(),
        messages: {
            'string.escapeHTML': '{{#label}} must not include HTML!'
        },
        rules: {
            escapeHTML : {
                validate(value, helpers) {
                    const clean = sanitizeHtml(value, {
                        allowedTags: [],
                        allowedAttributes: {},
                    });
                    if(clean !== value) {
                        return helpers.error('string.escapeHTML')
                    }
                    return clean;
                }
            }
        }
    }
}

const Joi = BaseJoi.extend(extension);

module.exports.productSchema = Joi.object({
    name: Joi.string().required().escapeHTML(),
    img: Joi.string().required().escapeHTML(),
    price: Joi.number().min(0).required(),
    desc: Joi.string().required().escapeHTML()
});

module.exports.reviewSchema = Joi.object({
    rating : Joi.number().required(),
    comment : Joi.string().required().escapeHTML()
})
