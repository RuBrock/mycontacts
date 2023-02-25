import { useRef } from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

import ContactsService from '../../services/ContactsService';

import toast from '../../utils/toast';

export default function NewContact() {
  const contactFormRef = useRef(null);

  const handleSubmit = async (contact) => {
    try {
      await ContactsService.createContact(contact);
      contactFormRef.current.resetFieldsValues();

      toast({ type: 'success', text: 'Contato cadastrado com sucesso!' });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao cadastrar o contato.' });
    }
  };

  return (
    <>
      <PageHeader title="Novo contato" />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
