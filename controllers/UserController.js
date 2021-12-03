const User = require('../models/UserModel')
const Joi = require('@hapi/joi')

const updateUserSchema = Joi.object({
  user_id: Joi.string().required(),
  channelName: Joi.string().allow('', null),
  categoryid: Joi.string().allow('', null),
  descComplaint: Joi.string().allow('', null),
  due_date: Joi.date()
})

module.exports = {
  getUsers: async (req, res) => {
    try {
      const user = await User.find({}, {user_id: false})
      res.status(200).send({
        data: user
      })
    } catch (error) {
      res.status(500).send({
        error: {
          status: 500,
          title: 'Internal Server Error'
        }
      })
    }
  },
  detailUser: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({_id: id}, {user_id: false})
      res.status(200).send({
        data: user
      })
    } catch (error) {
      res.status(500).send({
        error: {
          status: 500,
          title: 'Internal Server Error'
        }
      })
    }
  },
  updateUser: async (req, res) => {
    const { id } = req.params
    const {error} = updateUserSchema.validate(req.body)

    if (error) return res.status(400).send({
      error: {
        status: 400,
        title: 'Invalid Attribute',
        message: error.details[0].message
      }
    })
  }
}