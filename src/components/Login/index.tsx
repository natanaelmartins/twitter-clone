import React, { useState } from 'react';

import { Container, Logo, Header, EditData, Form, FormInput, FormLabel, EditButton, DividerCustom } from './styles';
import { Divider } from '@mui/material';

const Login: React.FC = () => {

  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <>
      <Container>
        <Logo />
        <Header>
          <EditData>
            <div>
              {showSignUp ? <h2>Inscreva-se no Twitter</h2> : <h2>Entrar no Twitter</h2>}
              <DividerCustom />

              {showSignUp ?
               <Form>
                 <FormInput
                    maxLength={160}
                 />
               <FormLabel>Nome de usuário</FormLabel>
                </Form>
               : 
               null
              }

              <Form>
                <FormInput
                  maxLength={160}
                />
                <FormLabel>Email</FormLabel>
              </Form>

              <Form>
                <FormInput
                  maxLength={160}
                />
                <FormLabel>Senha</FormLabel>
              </Form>
              
              <div>
                <EditButton outlined>Avançar</EditButton>
              </div>
                
                {showSignUp ?
                <h5><a onClick={() => {setShowSignUp(false)}}>Já possui uma conta? Entre</a></h5> 
                : 
                <h5><a onClick={() => {setShowSignUp(true)}}>Não tem uma conta? Inscreva-se</a></h5>
                }
              
            </div>
          </EditData>
        </Header>
      </Container>
    </>
  );
};

export default Login;