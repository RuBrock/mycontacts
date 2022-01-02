const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const ContactRequiredFieldsMiddleware = require('./app/middlewares/ContactRequiredFieldsMiddleware');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);

router.delete('/contacts/:id', ContactController.delete);
router.post(
  '/contacts',
  ContactRequiredFieldsMiddleware.required,
  ContactController.store,
);

module.exports = router;
