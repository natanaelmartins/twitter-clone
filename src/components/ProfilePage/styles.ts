/* O { css } é usado para quando algum componente for receber estilização própria */
import styled, { css } from "styled-components";

import { LocationOn, Cake, Close } from '../../styles/Icons';
import Button from '../Button';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  scrollbar-width: none; /* Para o firefox */
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

/* o background será usado na seção `Editar Perfil`*/
export const Background = styled.div`
  top: 0; 
  left: 0; 
  width: 100%;
  height: 100%; 
  background: rgba(91, 112, 131, 0.4); 
  position: fixed /* dá efeito de sobreposição junto com o absolute */; 
  z-index: 3; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-wrap: wrap;
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
  
  /* Não consegui usar o margin-top no formulário dentro do EditarPerfil */
  /* Por isso, decidi usar este margin-bottom para "empurrar" os formulários */
  :last-of-type {
    margin-bottom: 52px;
  }
  
`;
export const Avatar = styled.div`
   position: absolute;
   
   bottom: max(-70px, -10vw);
   left: 15px;
   border-radius: 50%;
   cursor: pointer;
   
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
  margin-top: 5px;
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
      
      :first-of-type {
        > svg {
          fill: var(--gray);
          margin-right: 5px;
          margin-bottom: 5px;
          }
       }
      > svg {
        fill: var(--gray);
        margin-right: 5px;
        margin-bottom: 6px;
      }
    }
  }
`;

export const EditData = styled.div`
  min-width: 100%;
  height: 100%;
  border-radius: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Arial, sans-serif;
  padding: 0; 
  background: black; 
  top: 5%; 
  left: 27.5%; 
  overflow-y: auto;
  
  @media (min-width: 426px) {
    /* font: normal 20pt; */ 
    border-radius: 25px;
    min-width: 600px; 
    height: 600px;
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

export const CloseIcon = styled(Close)`
  width: 22px;
  height: 22px;
  
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  
  &:hover {
    background: var(--twitter-dark-hover);
  }
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

export const SaveButton = styled(Button)`
  padding: 4px 16px;
  font-size: 13px;
  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const Form = styled.div`
  margin-top: 25px;
  margin-left: 15px;
  margin-right: 15px;
  border: 1px solid rgb(51, 54, 57);
  border-radius: 5px;
  
  position: relative;
 
  :last-of-type {
    margin-bottom: 60px;
  }
  
  > p {
    :first-of-type {
      color: rgb(113, 118, 123);
      font-size: 13px;
      margin-bottom: 4px;
    }
    :last-of-type {
      color: rgb(231, 233, 234);
      font-size: 16px;
      margin-bottom: 4px;
    }
  }
`;

export const FormText = styled.textarea`
  font-size: 16px;
  width: 96.5%;
  padding: 35px 10px 10px 10px;
  overflow: hidden;
  resize: none;
  margin-bottom: -5px;

  
  &:focus {
    outline: 1px solid var(--twitter);
    border-radius: 5px;
  }
  
  &::placeholder { 
    color: var(--gray);
  }
`;

export const FormLabel = styled.label`
  font-size: 90%;
  position: absolute;
  top: 0.68rem;
  color: gray;
  left: 0.59rem;
`;

export const Header = styled.div`
  z-index: 2;
  display: flex;
  align-items: center; 
  /* Há a intenção de jogar o texto para a esquerda */
  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  > button {
    /* Muda o design do cursor ao clicar no botão */
    outline: 0;
    cursor: pointer;
    &:hover {
      background: var(--twitter-dark-hover);
      :first-of-type {
        border-radius: 50%;
      }
    }
    :last-of-type {
        margin-left: auto;
        margin-right: 20px;
    }
  }
`;
