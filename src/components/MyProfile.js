import React from 'react';
import profilePhoto from './../img/prof_img.jpg';

const MyProfile = () => {
  return(
    <div className="space-y-8 border-gray-300 border border-4 shadow-xl">
      <div className="bg-blue-400 w-full flex justify-around">
        <div className="bg-white">
        <img src={profilePhoto} alt="profile" width="75px" height="75px" className=""></img>
        <h2 className="font-semibold text-gray-600">Robert and Brian</h2>
        <div className="flex space-x-4">
          <p>Tweets</p>
          <p>Following</p>
          <p>Followers</p>
        </div>
        </div>
      </div>
    </div>
  )
}


export default MyProfile;