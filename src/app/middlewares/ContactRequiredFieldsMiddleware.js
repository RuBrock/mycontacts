class ContactPostMiddleware {
  required(request, response, next) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required.' });
    }

    next();
  }
}

module.exports = new ContactPostMiddleware();
