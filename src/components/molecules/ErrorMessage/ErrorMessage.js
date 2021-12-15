import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from 'components/molecules/ErrorMessage/ErrorMessage.styles';

const defaultErrorMessage = 'Coś poszło nie tak, przepraszamy prosimy o kontakt z działem obsługi klienta';

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;