// Core Imports
import React from "react";
import { useDispatch } from "react-redux";
import { deletePostAsync } from "../../_redux/actions/PostActions";

// Component Imports

//Bootstrap Imports
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostListRow = ({ post }) => {
    const dispatch = useDispatch();

    function handleDeletePost(post, postAuthor) {
        dispatch(deletePostAsync(post, postAuthor));
    }

    return (
        <tr key={post.id}>
            <td className="id"><p>{post.id}</p></td>
            <td className="header"><p>{post.header}</p></td>
            <td className="body"><p>{post.body}</p></td>
            <td className="rating"><p>{post.rating}</p></td>
            <td className="timestamp"><p>{post.timestamp}</p></td>
            <td className="delete">
                <div className="delete-container">
                    <FontAwesomeIcon icon={faSquareMinus} onClick={() => handleDeletePost(post, post.author)} />
                </div>
            </td>
        </tr>
    )
}

export default PostListRow;



