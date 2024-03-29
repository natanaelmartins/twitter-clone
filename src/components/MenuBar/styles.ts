import styled, { css } from 'styled-components';

import { 
  Home, 
  Notifications, 
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Twitter,
 } from '../../styles/Icons';

export const Container = styled.div`
  display: none;


  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Twitter)`
  width: 31px;
  height: 31px;
  cursor: pointer;

  > path {
    fill: white;
  }

  margin-bottom: 15px;
  margin-left: 10px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-top: 5px;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 10px 10px;
  outline: 0;

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
    outline: 30px 30px;
  }

  &.active {
    span, svg {
      font-weight: bold;
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`${iconCSS}`;
export const BellIcon = styled(Notifications)`${iconCSS}`;
export const EmailIcon = styled(Email)`${iconCSS}`;
export const FavoriteIcon = styled(FavoriteBorder)`${iconCSS}`;
export const ProfileIcon = styled(Person)`${iconCSS}`;

export const Botside = styled.div`
  margin: -5px 0 30px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  cursor: pointer;

  flex-shrink: 0; /* Para não ficar espremido na tela */

  border-radius: 50%; /* Para ficar arredondado */

  > img {
    object-fit: cover;
    z-index: 2;
    width: 39px;
    height: 39px;
    
    clip-path: circle();
  }
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;

    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
