const jwt = require('jsonwebtoken');

/**
 * Middleware to authenticate requests
 *
 * @param {object} req express request
 * @param {object} res express response
 * @param {Function} next express next function
 * @returns {object}
 */
const authenticate = async (req, res, next) => {
	try {
		const { headers: { authorization } } = req;
		await jwt.verify(authorization.replace('Bearer ', ''), process.env.PRIVATE_KEY);
		return next();
	} catch (error) {
		return res.status(401).json({
			message: 'Unauthorized',
		});
	}
};

const createToken = async () => {
	const payload = { notifications: true };
	return jwt.sign(payload, process.env.PRIVATE_KEY);
};

module.exports = {
	authenticate,
	createToken,
};
