import React from 'react';
import { Container, Tab, Tweets } from './styles';
import Tweet from '../Tweet';

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






/*
import FlipMove from "react-flip-move";
import db from '../firebase.js';
import Post from '../Post';
import './Feed.css'; 



function Feed () {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  
  return (
  <div className="feed">
    <div className="feed_header">
      <h2>Home</h2>
     </div>
     
     <TweetBox />
     
     <FlipMove>
       {posts.map((post) => (
         <Post
           key={post.text}
           displayName={post.displayName}
           username={post.username}
           verified={post.verified}
           text={post.text}
           avatar={post.avatar}
           image={post.image}
         />
       ))}
     </FlipMove>
   </div>
 );
}

*/
