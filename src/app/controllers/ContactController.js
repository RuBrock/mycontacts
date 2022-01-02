const contactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await contactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;
    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({
        error: 'User not found.',
      });
    }

    response.json(contact);
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;
    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({
        error: 'User not found.',
      });
    }

    await contactsRepository.delete(id);
    // 204: No Content
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
