import React from 'react'; 
import profilePhoto from './../img/prof_img.jpg';


const CreatePost = () => {
  return (
    <div style={{display: "flex"}}>
      <img src={profilePhoto} alt="my avatar" width="20px" height="20px" ></img>
      <form>
        <input type="text" name="post" placeholder="What's happening?"/>
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default CreatePost; 