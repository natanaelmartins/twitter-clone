/* O { css } é usado para quando algum componente for receber estilização própria */
import styled, { css } from "styled-components";

import { Close, AddAPhoto } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;

  scrollbar-width: none; /* Para o firefox */

  ::-webkit-scrollbar {
    display: none;
  }
  
  :first-of-type {
    overflow: auto;
  }
`;

/* o background será usado na seção de editar perfil */
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

export const BannerDiv = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 189px);
  position: relative;
 
  > img {
    object-fit: cover;
    width: 100%;
    height: min(33vw, 189px);
  }
  
  /* Não consegui usar o margin-top no formulário dentro do EditarPerfil */
  :last-of-type {
    margin-bottom: 52px;
  }
`;

export const BannerLabel = styled.label`

  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 189px);
  cursor: pointer;
  
  :hover {
    opacity: 80%;
  }
  
  > img {
    object-fit: cover;
    width: 100%;
    height: min(33vw, 189px);
  }
  
  /* Não consegui usar o margin-top no formulário dentro do EditarPerfil */
  :last-of-type {
    margin-bottom: 52px;
  }
  
`;

export const AvatarLabel = styled.label`
   position: absolute;
   
   bottom: max(-70px, -10vw);
   left: 15px;
   border-radius: 50%;
   cursor: pointer;
   z-index: 1;
   
   :hover {
    opacity: 80%;
  }

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
  /* 
  Esse absolute só é possível pois há um position relative lá em cima 
  position: absolute;
  top: 2vw;
  right: 7px;
  */

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const PhotoIcon = styled(AddAPhoto)`
   position: absolute;
   
   pointer-events: none;
   opacity: 80%;
   left: 15px;
   cursor: pointer;
   z-index: 1;
   width: 20px;
   height: 20px;
   padding: 12px;
   background: black;
   
   clip-path: circle(at 50% 50%);
   bottom: max(-22px, -10vw);
   left: 57px;
   
   @media (max-width: 475px) {
    padding: 10px; 
    bottom: max(-16px, -10vw);
    left: 37.5px;
  }
   
   :last-of-type {
    bottom: max(70px, -10vw);
    left: 270px;
    
    @media (max-width: 475px) {
    padding: 10px;
    bottom: max(40px, -10vw);
    left: 170px;
  }
  }
`;

export const Form = styled.div`
  position: relative;
  margin-top: 25px;
  margin-left: 15px;
  margin-right: 15px;
  border: 1px solid rgb(51, 54, 57);
  border-radius: 5px;
 
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

export const FormInput = styled.input`
  font-size: 16px;
  width: 96.5%;
  /* Ajustei o padding em cima e em baixo para que ele cobrisse o padding do FormLabel */
  padding: 40px 10px 15px 10px;
  overflow: hidden;
  resize: none;
  
  :nth-child(2),
  :nth-child(4)
  {
    /* Ajustei o padding em cima e em baixo para que ele cobrisse o padding do FormLabel */
    padding: 40px 10px 60px 10px;
  }
  
  @media (min-width: 300px) {
    &:focus {
    outline: 1px solid var(--twitter);
    border-radius: 5px;
  }
  }
`;

export const FormLabel = styled.label`
  box-sizing: border-box;
  font-size: 90%;
  position: absolute;
  top: 0.68rem;
  color: gray;
  left: 0.59rem;
  /* Ajustei o padding nas laterais para que ele ficasse menor que o padding do FormInput */
  padding: 0 5px;
`;



/*

export const FormInput = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  width: 96.5%;
  padding: 35px 10px 10px 10px;
  overflow: hidden;
  resize: none;
  margin-bottom: -5px;
  
  :nth-child(2),
  :nth-child(4)
  {
    padding: 35px 10px 55px 10px;
  }
  
  &:focus {
    outline: 1px solid var(--twitter);
    border-radius: 5px;
  }
`;

export const FormLabel = styled.label`
  box-sizing: border-box;
  font-size: 90%;
  position: absolute;
  top: 0.68rem;
  color: gray;
  left: 0.59rem;
`;

*/


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
