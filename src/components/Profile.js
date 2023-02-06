import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({name, avatar}) => {  
  return(
    <>
      <img src={avatar} alt="profile" height="30px" width="30px"></img>
      {/* <p>{name}</p> */}
      <form>
        <label>{name}</label>
        <button type="submit">Follow</button>
      </form> 
    </>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string
}

export default Profile;