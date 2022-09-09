import PropTypes from 'prop-types';

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ type, text }) {
  return (
    <Container type={type}>
      {type === 'danger' && (
        <img src={xCircleIcon} alt="Danger X Icon" />
      )}
      {type === 'success' && (
        <img src={checkCircleIcon} alt="Success Check Icon" />
      )}

      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'danger', 'success']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
