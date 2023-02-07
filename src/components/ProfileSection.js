import React from 'react';
import MyProfile from './MyProfile';
import AboutMe from './AboutMe';

const ProfileSection = () => {
  return(
    <div className="flex flex-col w-1/3 space-y-8 mr-4">
      <MyProfile/>
      <AboutMe/>
    </div>
  )
}


export default ProfileSection;