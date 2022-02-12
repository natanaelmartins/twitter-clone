import React from 'react';

import { 
  Container,
  Avatar,
  Info,
  FollowButton
} from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar>
        <img src="https://telegra.ph/file/10d2a8eec8c97ec3565e7.jpg" alt="Twitter Icon"/>
        </Avatar>

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}

export default FollowSuggestion;