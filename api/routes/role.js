import express from "express";
import { createRole, deleteRole, getAllRoles, updateRole } from "../controllers/roleController.js";

const router = express.Router();

//create a mew role
router.post('/create', createRole);

//update the roole
router.put('/update/:id', updateRole);

//get all roles
router.get('/getAll', getAllRoles);

//delete role
router.delete('/delete/:id',deleteRole);

export default router;