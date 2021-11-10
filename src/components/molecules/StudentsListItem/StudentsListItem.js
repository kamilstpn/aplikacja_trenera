import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledInfo, Wrapper } from './StudentsListItem.styles';
import { UserShape } from 'types';


const StudentsListItem = ({ userData: { number, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <DeleteButton />
      
      <StyledInfo>
      
        <p>
        {name}

        <StyledAverage value={number}>{number}</StyledAverage>
        </p>
        <p>Frekwencja: {attendance}</p>
        
      </StyledInfo>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;