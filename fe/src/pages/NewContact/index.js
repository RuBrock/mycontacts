import PageHeader from '../../components/PageHeader';

import ContactForm from '../../components/ContactForm';
import ContactService from '../../services/ContactService';

export default function NewContact() {
  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const response = await ContactService.createContact(contact);
      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o Contato');
    }
  };

  return (
    <>
      <PageHeader title="Novo contato" />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
