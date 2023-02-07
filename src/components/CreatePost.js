import React from 'react'; 
import profilePhoto from './../img/prof_img.jpg';


const CreatePost = () => {
  return (
    <div className='flex'>
      <img src={profilePhoto} alt="my avatar" width="20px" height="20px" ></img>
      <form className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <input type="text" name="post" placeholder="What's happening?"/>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">Post</button>
      </form>
    </div>
  )
}

export default CreatePost; 