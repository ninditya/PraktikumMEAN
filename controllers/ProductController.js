const Joi = require('@hapi/joi')
const Product = require('../models/ProductModel')

const createProductSchema = Joi.object({
  id: Joi.number().required(),
  Product_name: Joi.string().required(),
  urlProduct: Joi.string().allow('', null),
  skuProduct: Joi.string().allow('', null),
  due_date: Joi.date()
})

module.exports = {
  createProduct: async (req, res) => {
    const {error} = createProductSchema.validate(req.body)

    if (error) return res.status(400).send({
      error: {
        status: 400,
        title: 'Invalid Attribute',
        message: error.details[0].message
      }
    })

    try {
      const Product = await Product.create(req.body)
      res.status(201).send({
        data: Product
      })
    } catch (err) {
      res.status(500).send({
        error: {
          status: 500,
          title: 'Internal Server Error'
        }
      })
    }
  },
}