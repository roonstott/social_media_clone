import React from 'react';
import PropTypes from 'prop-types'

const Post = ({name, body, avatar}) => {
  return(
    <div className="flex border space-x-3 space-y-2 ">
      <div className="w-12 h-12 justify-self-auto">
        <img src={avatar} alt="profile" className='w-12 h-12 inline-block justify-center'></img>
      </div>
      <div className="w-4/5 justify-self-end">
        <p>{name}</p>
        <p>{body}</p>
      </div>
    </div>
  )
}

Post.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  avatar: PropTypes.string
}

export default Post;