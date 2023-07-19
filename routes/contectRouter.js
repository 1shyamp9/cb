import express from 'express';
import { isAuth } from '../middleware/auth.js';
import { AllContact, CreateContact, deleteContact, updateContact, viewContact } from '../controllers/contactController.js';

export const contactRouter = express.Router();

contactRouter.post('/new', isAuth, CreateContact);
contactRouter.get('/allcontact', isAuth, AllContact);
contactRouter.route('/:id')
    .get(isAuth, viewContact)
    .put(isAuth, updateContact)
    .delete(isAuth, deleteContact)