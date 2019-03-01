import express from 'express';
import {
  getContacts,
  createContact,
  viewContacts,
  updateContact,
  deleteContact,
} from './contactController';

const router = express.Router();
router.get('/', function (req, res) {
  res.json({
    statue: 'api is working',
    message: 'Welcome to resthub crafted with love!',
  })
})

router.route('/contacts')
  .get(getContacts)
  .post(createContact);

router.route('/contacts/:contact_id')
  .get(viewContacts)
  // .patch(contactController.update)
  .put(updateContact)
  .delete(deleteContact);

export default router;
