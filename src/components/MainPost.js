import React from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import profilePicture from './../img/prof_img.jpg'
import FollowSuggestions from './FollowSuggestions'

const postData = 
[
  {name: "Xena", body: "What's the deal with oil prices and stuff. Man, it cost me $20 to fill up my go-cart.", avatar: profilePicture },
  {name: "Btana", body: "I'm looking for a new API with anime emojis. The one I'm using right now only has like 20 billion and I've loved them all to death already.", avatar: profilePicture },
  {name: "Bobo", body: "Here's a pic of my doggo being a cutie pie goofball. Ohmygod. Soooooo cuuuuuteeee.", avatar: profilePicture },
  {name: "YoMicrosoft", body: "What's the deal with oil prices and stuff. Man, it cost me $20 to fill up my go-cart.", avatar: profilePicture },
  {name: "KearsThousandLb", body: "I just went on a relaxing vacation with my furry babies.", avatar: profilePicture }
];

const MainPost = () => {
  let posts;

  posts = postData.map((entry, index) => {
    return <Post name={entry.name} body={entry.body} avatar={entry.avatar} key={index}></Post>
  });

  return(
    <>
      <CreatePost></CreatePost>
        {posts}
      <FollowSuggestions/>
    </>
  )
}

export default MainPost;