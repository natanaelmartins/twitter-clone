import styled from 'styled-components';

export const Container = styled.div`
  /* Coloriza o fundo de toda a página */
  background: var(--primary);
`;
export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  /* Posiciona os contêiners horizontalmente (um ao lado do outro) na tela */
  display: flex; 
  justify-content: center;
`;
