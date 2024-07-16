// Core Imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import { getPostsAsync } from '../../_redux/actions/PostActions';
import Post from "./Post";
import CreatePost from "./CreatePost";
import { selectActiveUser } from "../../_redux/reducers/UserSlice";

// Bootstrap Imports 
import { Row, Col } from 'react-bootstrap';

export default function Wall() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const activeUser = useSelector(selectActiveUser);

    useEffect(() => {
        dispatch(getPostsAsync());
    }, [dispatch]);

    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText="The Wall" />
                </Col>
            </Row>


            <Row className='row wall-container'>
                <Col className={'col'} sm="12" md="12" lg="8" xl="8" xxl="8">
                    {activeUser && <CreatePost />}
                    <div className='wall--inner-container'>

                        {posts.length > 0 ? (
                            posts.map(post => (
                                <Post key={post.id} post={post} />
                            ))
                        ) : (
                            <motion.div className='no-posts'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p>No posts yet</p>
                            </motion.div>
                        )}

                    </div>
                </Col>
                <Col className={'col'} sm="12" md="12" lg="4" xl="4" xxl="4">
                </Col>
            </Row>
        </>
    );
}
