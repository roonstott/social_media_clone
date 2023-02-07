import React from 'react'; 
import ProfileSection from './ProfileSection';
import MainPost from './MainPost';

const MainBody = () => {

  return (
    <section className="flex">
      <ProfileSection></ProfileSection>
      <MainPost></MainPost>
    </section>
  )
}

export default MainBody;