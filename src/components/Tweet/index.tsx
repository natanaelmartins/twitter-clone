import React, { useState } from 'react';

import { 
  Container, 
  Retweeted, 
  RocketseatIcon, 
  Body, 
  Avatar, 
  Content, 
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
 } from './styles';


const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
       <RocketseatIcon />
       Você retweetou
      </Retweeted>

      <Body>
        <Avatar>
        <img src="https://telegra.ph/file/10d2a8eec8c97ec3565e7.jpg" alt="Twitter"/>
        </Avatar>

        <Content>
          <Header>
            <strong>Twitter</strong>
            <span>@twitter</span>
            <Dot />
            <time>14 de jan</time>
          </Header>

          <Description>Parabéns pelo novo projeto! c:</Description>

          <ImageContent>
          <img src="https://telegra.ph/file/155794fe2df6e6885ff0a.jpg" alt="Número um"/>
          </ImageContent>

          <Icons>
            <Status>
              <CommentIcon />
              10
            </Status>
            <Status>
              <RetweetIcon />
              5
            </Status>
            <Status>
              <LikeIcon />
              200
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;




/*

import db from './firebase';

function Tweet() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  
  const sendTweet = (e) => {
    e.preventDefault();
    
    db.collection("posts").add({
      displayName: "Natanael Martins",
      username: "Mercuryw1ng",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://telegra.ph/file/2861a8a4acfe5e93c99f2.jpg"
    });
    
    setTweetMessage("");
    setTweetImage("");
  };
  
 
*/
