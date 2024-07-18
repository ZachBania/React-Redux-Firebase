// Core Imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

// Component Imports
import { updateRating, getRating, getActiveUserRating } from "../../_redux/actions/PostActions";
import { isAuthenticated, selectUserEmail } from "../../_redux/reducers/UserSlice";

// Bootstrap Imports
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = ({ post }) => {

  const dispatch = useDispatch();
  const activeUserEmail = useSelector(selectUserEmail);
  const isAuth = useSelector(isAuthenticated);

  useEffect(() => {
    dispatch(getRating(post.id, activeUserEmail));
  }, [post.id, activeUserEmail, dispatch]);

  function handleRatingOnClick(postId, direction) {
    if (isAuth && activeUserEmail) {
      dispatch(updateRating(postId, direction, activeUserEmail));
    } else {
      alert("You must be logged in to rate posts.");
    }
  }




  return (
    <>
      <motion.div className={ post.author == activeUserEmail ? "post-container by-active-user": "post-container"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="post--inner-container">

          <div className="post-rating-container">
            <div className="post-rating">
              <FontAwesomeIcon 
              icon={faChevronUp} onClick={() => handleRatingOnClick(post.id, 1)} className={ post.ratingOfActiveUser == 1 ? "active" : ""} />
              <p className="rating">{post.rating ? (post.rating) : 0}</p>
              <FontAwesomeIcon icon={faChevronDown} onClick={() => handleRatingOnClick(post.id, -1)} className={ post.ratingOfActiveUser == -1 ? "active" : ""} />
            </div>
          </div>

          <div className="post-content-container">

            <div className="post-header-container">
              <h2 className="post-header">{post.header}</h2>
            </div>
            {/* <div className="post-author-container">
              <p className="post-author">{post.author}</p>
            </div> */}
            {/* <div className="post-timestamp-container">
              <p className="post-timestamp">{post.timestamp}</p>
            </div>  */}
            <div className="post-body-container">
              <p className="post-body">{post.body}</p>
            </div>

          </div>
        </div>
      </motion.div>

    </>
  );
}

export default Post;
