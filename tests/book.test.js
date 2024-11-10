import request from 'supertest';
import app from '../app.js';

describe('Book API', () => {
  it('GET /books - success', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.data)).toBeTruthy();
  });

  it('POST /books - success', async () => {
    const res = await request(app)
      .post('/books')
      .set('Authorization', `Bearer valid_jwt_token`)
      .send({ title: 'Test Book', author: 'Author' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe('Test Book');
  });
});
