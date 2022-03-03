/**
 * Hook to set the env variables and global functions
 * needed to execute the test suites
 */
beforeAll(async () => {
// TODO
});

/**
 * Hook to clean the test database after every test is finished
 */
afterEach(async () => {
	try {
		// TODO code to cleen database
	} catch (error) {
		console.log('jest setup', 'cleaning dynamo db', error.code);
	}
});

/** Hook to be executed after all the test have ran */
afterAll(() => {
	jest.resetAllMocks();
});
