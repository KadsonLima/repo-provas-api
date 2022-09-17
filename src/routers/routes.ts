import { Router } from 'express';
import { validateJWT } from '../middlewares/validateJwtMiddleware';
import authRouter from './authRouter';
import testRouter from './testRouter';

const router = Router()

router.use(authRouter)
router.use(validateJWT())
router.use(testRouter)

export default router