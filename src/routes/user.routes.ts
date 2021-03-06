import { Router } from 'express';
const router = Router();

import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.controller";

router.get('/user', getUsers);
router.post('/user', createUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;