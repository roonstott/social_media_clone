import React from 'react';
import profilePhoto from './../img/prof_img.jpg';

const MyProfile = () => {
  return(
    <>
      <img src={profilePhoto} alt="profile" width="75px" height="75px"></img>
      <h2>My profile</h2>
      <p>This is some text in my profile</p>
    </>
  )
}


export default MyProfile;