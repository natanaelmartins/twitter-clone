import styled from 'styled-components';
 
import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%); /* Leia-se: consome 100%, tendo um mínimo de 399px */
  }
`;
 
export const SearchWrapper = styled.div`
  padding: 10px 67px 10px 22px;
  width: min(290px, 100%);

  position: fixed;
  z-index: 2;
  top: 0;
  background: var(--primary);

  max-height: 40px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;

  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: var(--search);


  &::placeholder {
    
    color: var(--gray);
  }

  /* A partir desse ponto, é usada uma técnica CSS para conseguir colocar o ícone dentro do input */

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 100ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px; /* Os 200px garantirão um bom espaço excedente após o componente */
  margin-top: 3px;

  /* A modificação abaixo criará um espaçamento no margin-top na segunda lista */
  > div + div {
    margin-top: 15px;
  }
`;