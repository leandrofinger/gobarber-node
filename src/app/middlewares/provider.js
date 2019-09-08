import User from '../models/User';

export default async (req, res, next) => {
  const isProvider = await User.findOne({
    where: { id: req.userId, provider: true },
  });

  if (!isProvider) {
    return res
      .status(403)
      .json({ error: 'This action is allowed just for providers' });
  }

  return next();
};
