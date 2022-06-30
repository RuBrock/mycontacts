import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>

        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ordenation arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rubens Silva</strong>
              <small>instagram</small>
            </div>

            <span>r.brocksilva@yahoo.com.br</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit contact link" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete contact button" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rubens Silva</strong>
              <small>instagram</small>
            </div>

            <span>r.brocksilva@yahoo.com.br</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit contact link" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete contact button" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rubens Silva</strong>
              <small>instagram</small>
            </div>

            <span>r.brocksilva@yahoo.com.br</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit contact link" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete contact button" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
