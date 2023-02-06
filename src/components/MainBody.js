import React from 'react'; 
import ProfileSection from './ProfileSection';
import MainPost from './MainPost';

const MainBody = () => {

  return (
    <React.Fragment>
      <ProfileSection></ProfileSection>
      <MainPost></MainPost>
    </React.Fragment>
  )
}

export default MainBody;