import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Loader from '../../components/Loader';

export default function Home() {
  return (
    <Container>
      <Loader />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>

        <Link to="/new">Novo Contato</Link>
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
            <Link to="/edit/1">
              <img src={edit} alt="Edit contact link" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete contact button" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
