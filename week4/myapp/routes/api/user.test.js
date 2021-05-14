const request = require('supertest');

const app = require('../../app');
let server;
let defaultUser = {
    name: 'abc',
}

beforeAll(() => {
    console.log(defaultUser);
    return app.start(3000, 'mongodb://anhnguyen:123@localhost:27017/nodejs-basic?authSource=admin')
    .then(httpserver => {
        server = httpserver;
    });
});

afterAll(done => {
    if (server) {
        server.close();
        done();
    }
});

test('GET /api/users', async () => {
     await request(app)
        .get('/api/users')
        .expect(200)
        .then(res => {
            expect(1).toBe(0);
            expect(res.statusCode).toBe(200);
            // expect(res.body.header).toBeDefined();
            // expect(res.body.header.count).toBeGreaterThan(0);
            // expect(res.body.body).toBeDefined();
            // expect(res.body.body.length).toBeGreaterThan(0);
        });
});