// import { Router } from 'express';
// import { RegisterUserService } from './services/register-user.service';
// import { UserController } from './controller';
// import { FinderUserService } from './services/finder-users.service';
// import { LoginUserService } from './services/login-user.service';
// import { UpdateUserService } from './services/update-user.service';
// import { DeleteUserService } from './services/delete-user.service';
// import { EmailService } from '../common/services/email.service';
// import { envs } from '../../config';
// import { send } from 'process';
// import { AuthMiddleware } from '../common/middlewares/auth.middleware';
// import { UserRol } from '../../data';

// export class UserRoutes {
//   static get routes(): Router {
//     const router = Router();

//     const emailService = new EmailService(
//       envs.MAYLER_SERVICE,
//       envs.MAYLER_EMAIL,
//       envs.MAYLER_SECRET_KEY,
//       envs.SEND_MAIL
//     );
//     const registerUserService = new RegisterUserService(emailService);
//     const finderUsersService = new FinderUserService();
//     const loginUserService = new LoginUserService(finderUsersService);
//     const updateUserService = new UpdateUserService(finderUsersService);
//     const deleteUserService = new DeleteUserService(finderUsersService);

//     const userController = new UserController(
//       registerUserService,
//       loginUserService,
//       finderUsersService,
//       updateUserService,
//       deleteUserService
//     );

//     router.post('/register', userController.userRegister);
//     router.post('/login', userController.loginUser);
//     router.get('/validate-account/:token', userController.validateAccount);
//     router.use(AuthMiddleware.protect);
//     router.get(
//       '/',
//       AuthMiddleware.restrictTo(UserRol.ADMIN),
//       userController.findAllUsers
//     );
//     router.get('/:id', userController.finOneUser);
//     router.patch(
//       '/:id',
//       AuthMiddleware.restrictTo(UserRol.ADMIN, UserRol.USER),
//       userController.updateUser
//     );
//     router.delete(
//       '/:id',
//       AuthMiddleware.restrictTo(UserRol.ADMIN),
//       userController.deleteUser
//     );

//     return router;
//   }
// }
