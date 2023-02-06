import React from 'react';
import PropTypes from 'prop-types'

const Post = ({name, body, avatar}) => {
  return(
    <div style={{ display: "flex" }}>
      <img src={avatar} alt="profile" width="50px" height="50px"></img>
      <div>
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