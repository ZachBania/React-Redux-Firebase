// Core Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Component Imports
import PostListRow from "./PostListRow";
import { deletePostsByAuthorAsync } from "../../_redux/actions/PostActions";
import { selectUserEmail } from "../../_redux/reducers/UserSlice";

//Bootstrap Imports
import { Table } from "react-bootstrap";
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostList = ({ posts }) => {

    const dispatch = useDispatch();
    const activeUserEmail = useSelector(selectUserEmail);

    function deletePostsByAuthor() {
        dispatch(deletePostsByAuthorAsync(activeUserEmail));
    }

    return (
        <>
            {posts.length > 0 ? (
                <>
                    <div className="posts-list-container">
                        <Table>
                            <thead>
                                <tr>
                                    <th className="id"><p>#</p></th>
                                    <th className="header"><p>Header</p></th>
                                    <th className="body"><p>Body</p></th>
                                    <th className="rating"><p>Rating</p></th>
                                    <th className="timestamp"><p>Timestamp</p></th>
                                    <th className="delete"><FontAwesomeIcon icon={faSquareMinus} onClick={deletePostsByAuthor} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts && posts.map(post => (
                                    <PostListRow key={post.id} post={post} />
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </>
            ) : ('')}
        </>
    )
}

export default PostList;



