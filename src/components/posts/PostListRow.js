// Core Imports
import { React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

// Component Imports
import { selectUserEmail } from "../../_redux/reducers/UserSlice";
import { getRating } from "../../_redux/actions/PostActions";
import { deletePostAsync } from "../../_redux/actions/PostActions";

//Bootstrap Imports
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostListRow = ({ post }) => {
    const dispatch = useDispatch();
    const activeUserEmail = useSelector(selectUserEmail);
    
    useEffect(() => {
        dispatch(getRating(post.id, activeUserEmail));
    }, [post.id, activeUserEmail, dispatch]);

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



