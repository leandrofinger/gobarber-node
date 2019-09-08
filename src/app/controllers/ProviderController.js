import User from '../models/User';
import Avatar from '../models/Avatar';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: Avatar,
          as: 'avatar',
          attributes: ['path', 'url'],
        },
      ],
    });
    return res.json(providers);
  }
}

export default new ProviderController();
