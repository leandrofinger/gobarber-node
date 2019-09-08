import { endOfDay, startOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import Appointment from '../models/Appointment';

const PAGE_LIMIT = 20;

class ScheduleController {
  async index(req, res) {
    const { page = 1, date } = req.query;
    const parsedDate = parseISO(date);

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
        limit: PAGE_LIMIT,
        offset: (page - 1) * PAGE_LIMIT,
        order: ['date'],
      },
    });

    return res.json(appointments);
  }
}

export default new ScheduleController();
