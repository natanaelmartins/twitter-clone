/* por enquanto, tudo ok */
import React, { useState, useEffect } from 'react';

/* altere o Tweet */
import Tweet from '../Tweet';
import db from '../firebase.js';

/*
import Post from './Post';
import './Feed.css';
import FlipMove from "react-flip-move";
*/

import { Container, Tab, Tweets } from './styles';

/*
function Feed () {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  
  return (
*/
  
const Feed: React.FC = () => {
  return(
    <Container>
      <Tab>Tweets</Tab>

      
      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets> 
    </Container>
  )
}

export default Feed;
