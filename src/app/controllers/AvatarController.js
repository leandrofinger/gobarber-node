import Avatar from '../models/Avatar';

class AvatarController {
  async store(req, res) {
    const { filename: path } = req.file;
    const file = await Avatar.create({ user_id: req.userId, path });
    return res.json(file);
  }
}

export default new AvatarController();
