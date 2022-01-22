import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* A lógica de estar como uma coluna se deve ao fato de que no Twitter real há outras opções ao lado de "Tweet", que seguem essa mesma lógica */
  flex-direction: column;
`;

export const Tab  = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;