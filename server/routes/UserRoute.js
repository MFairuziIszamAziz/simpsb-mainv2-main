import express from "express";
import { 
    getUsers, 
    getUserById, 
    saveUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

//ambil endpoint dari UserController
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', saveUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router;