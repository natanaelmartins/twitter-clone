/* o useState será usado pelo script do botão */
import React, { useState } from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon,
  CloseIcon,
  Followage,
  EditButton,
  Header,
  SaveButton,
  Background,
  EditData,
  Form,
  FormInput
} from './styles';

import AvatarPicture from '../Assets/Avatar.jpg';
import HeaderPicture from '../Assets/Header.jpg';

const ProfilePage: React.FC = () => {
  /* código do botão "Editar Perfil" */
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => { showResults ? setShowResults(false) : setShowResults(true) };
  
  /* código da aba "Editar Perfil" */
  const EditPage = () => {
    return (
     <Background>
      <EditData>
       <Header>
      
        <button>
        <CloseIcon onClick={onClick} />
        </button>
        <h3 style={{marginLeft: "20px"}}>Editar perfil</h3>
        <SaveButton outlined onClick={onClick}>Salvar</SaveButton>
         
        </Header>
        
        <Container>
          <Banner>
            <Avatar>
              <img src={AvatarPicture} alt="Natanael Martins"/>
            </Avatar>
          <img src={HeaderPicture} alt="twitter header" />
        </Banner>
      </Container>
        
        <Form>
          <FormInput placeholder = "Nome" />
        </Form>
        
        <Form>
          <FormInput placeholder = "Bio" style={{padding: "10px 10px 75px"}} />
        </Form>
        
        <Form>
          <FormInput placeholder = "Localização" />
        </Form>
        
        <Form>
          <FormInput placeholder = "Site" style={{padding: "10px 10px 75px"}} />
        </Form>
      </EditData>
     </Background>
    );
  }
  
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src={AvatarPicture} alt="Natanael Martins"/>
        </Avatar>
        <img src={HeaderPicture} alt="twitter header" />
      </Banner>

      <ProfileData>
       
        <div>
          <EditButton outlined onClick={onClick}>Editar Perfil</EditButton>
          { showResults ? <EditPage /> : null }
        </div>

        <h1>Natanael Martins</h1>
        <h1>@Mercuryw1ng</h1>

        <p>
          Estudante de Sistemas de Informação :)
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido em 29 de agosto de 2001
          </li>
        </ul>

        <Followage>
          {/* Optei por usar as entidades &ensp; e &emsp; para o espaçamento */}
          <span>
            <strong>10&ensp;</strong>seguindo
          </span>
          <span>
            <strong>&emsp;60</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
