import React from 'react';
import Profile from './Profile';
import profilePicture from './../img/prof_img.jpg';

let profileData = [
  {name: "Bob Gates", avatar: profilePicture},
  {name: "Elon Musky", avatar: profilePicture},
  {name: "Brock Obama", avatar: profilePicture}
]

const FollowSuggestions = () => {
  let suggestions;

  suggestions = profileData.map((entry, index) => {
    return <Profile name={entry.name} avatar={entry.avatar} key={index}></Profile>
  });
  return(
    <div>
      <h3>Follow Suggestions</h3>
      {suggestions}
    </div>
  )
}

export default FollowSuggestions;