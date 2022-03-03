// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const { createToken } = require('../auth');
const { app } = require('../../app');

describe('Autentication middleware', () => {
	it('verify a valid token', async () => {
		const resp = await request(app)
			.get('/')
			.set('Authorization', `Bearer ${process.env.JWT_TEST}`)
			.send();
		expect(resp.status).toBe(404);
	});
	it('verify an invalid token', async () => {
		const resp = await request(app)
			.get('/')
			.send()
			.expect(401);
		expect(resp.body.message).toBe('Unauthorized');
	});
	it('create a token token', async () => {
		const token = await createToken();
		expect(token.split('.')).toHaveLength(3);
	});
});
