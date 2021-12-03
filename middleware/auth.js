const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(' ')[1];

		jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
			if (err) {
				return res.sendStatus(403);
			}

			req.user = user;
			next();
		});
	} else {
		res.status(401).send({
			error: {
				status: 401,
				title: 'Access Denied!',
				message: 'The Authorization given does not have access to this resource'
			}
		})
	}
}

module.exports = auth