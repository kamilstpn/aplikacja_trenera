import { rest } from 'msw';
import { db } from 'mocks/db';
import { authenticateRequest } from 'mocks/helpers';

const seperate = (user) => {
  const { password, ...rest } = user;
  return rest;
};

export const auth = [
  rest.post('/login', (req, res, ctx) => {
    const user = db.coach.findFirst({
      where: {
        login: {
          equals: req.body.login,
        },
      },
    });
    if (user && user.password === req.body.password) {
      const token = btoa(user.login);
      localStorage.setItem('__be_token__', token);
      return res(ctx.status(200), ctx.json({ ...seperate(user), token }));
    }
    return res(
      ctx.status(403),
      ctx.json({
        error: 'Invalid user data',
      })
    );
  }),
  rest.get('/me', (req, res, ctx) => {
    if (authenticateRequest(req)) {
      const user = db.coach.getAll();
      return res(ctx.status(200), ctx.json({ ...seperate(user) }));
    }
    return res(ctx.status(401));
  }),
];