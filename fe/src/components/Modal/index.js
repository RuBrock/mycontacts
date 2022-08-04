import PropTypes from 'prop-types';

import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do Modal</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Footer>
          <button type="button" className="cancel-cta">
            Cancelar
          </button>

          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
