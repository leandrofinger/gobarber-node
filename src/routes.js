import { Router } from 'express';
import multer from 'multer';

import authMiddleware from './app/middlewares/auth';
import providerMiddleware from './app/middlewares/provider';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AvatarController from './app/controllers/AvatarController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/avatars', upload.single('file'), AvatarController.store);
routes.get('/providers', ProviderController.index);
routes.get('/providers/:provideId/available', AvailableController.index);
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);
routes.get('/schedule', providerMiddleware, ScheduleController.index);
routes.get('/notifications', providerMiddleware, NotificationController.index);
routes.put(
  '/notifications/:id',
  providerMiddleware,
  NotificationController.update
);

export default routes;
