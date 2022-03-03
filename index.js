const { app } = require('./app');

const start = async () => {
	app.listen(process.env.PORT, () => {
		console.log('app.js', `Server running at ${process.env.PORT}`);
	});
};

start();
