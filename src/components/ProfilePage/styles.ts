/* O { css } é usado para quando algum componente for receber estilização própria */
import styled, { css } from "styled-components";

import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow: auto;

  scrollbar-width: none; /* Para o firefox */

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Banner = styled.div`

  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 189px);
  position: relative;
  cursor: pointer;
  
  > img {
    object-fit: cover;
    width: 100%;
    height: min(33vw, 189px);
  }
  
`;
export const Avatar = styled.div`
   position: absolute;
   
   bottom: max(-60px, -10vw);
   left: 15px;
   border-radius: 50%;

  > img {
    /* Usei o cover para melhorar a qualidade da imagem */
    object-fit: cover;
    z-index: 2;
    width: max(45px, min(125px, 22vw));
    height: max(45px, min(140px, 22vw));
    
    background: var(--gray);
    clip-path: circle();
    
    bottom: max(-60px, -10vw);
    left: 15px;
  }
`;
export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > & {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul { 
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

/* Estilização própria para os ícones da ProfilePage */
const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS} 
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const EditButton = styled(Button)`
  /* Esse absolute só é possível pois há um position relative lá em cima */
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const EditData = styled(Button)`
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  outline: 0;

  @media (min-width: 320px) {
  }
`;
