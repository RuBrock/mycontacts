const { Router } = require('express');

const CategoryController = require('./app/controllers/CategoryController');
const CategoryRequiredFieldsMiddleware = require('./app/middlewares/CategoryRequiredFieldsMiddleware');
const ContactController = require('./app/controllers/ContactController');
const ContactRequiredFieldsMiddleware = require('./app/middlewares/ContactRequiredFieldsMiddleware');

const router = Router();

router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.post(
  '/categories',
  CategoryRequiredFieldsMiddleware.required,
  CategoryController.store,
);
router.put(
  '/categories/:id',
  CategoryRequiredFieldsMiddleware.required,
  CategoryController.update,
);
router.delete('/categories/:id', CategoryController.delete);

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.post(
  '/contacts',
  ContactRequiredFieldsMiddleware.required,
  ContactController.store,
);
router.put(
  '/contacts/:id',
  ContactRequiredFieldsMiddleware.required,
  ContactController.update,
);
router.delete('/contacts/:id', ContactController.delete);

module.exports = router;
