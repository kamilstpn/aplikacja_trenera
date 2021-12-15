
import React from 'react';
import { SearchBarWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
export const SearchBar = () => {
  

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Zalogowany jako:</p>
        <p>
          <strong>Trener Kamil Stępień</strong>
        </p>
      </StatusInfo>
      
    </SearchBarWrapper>
  );
};