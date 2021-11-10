
import React from 'react';

import { SearchBarWrapper,  StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';


export const SearchBar = () => {
  

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Zostałeś zalogowany jako:</p>
        <p>
          <strong>Trener Jan Nowak</strong>
        </p>
      </StatusInfo>
      
    </SearchBarWrapper>
  );
};