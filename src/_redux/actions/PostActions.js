import { db } from '../../_api/firebase';
import { getPost, getPosts, createPost, updatePost, deletePost, setPostRating, postError } from '../reducers/PostSlice';
import { createNotification } from './NotificationActions';

export const getPostsAsync = () => async (dispatch) => {
    try {
        const snapshot = await db.collection('Posts').orderBy('id', 'desc').get();
        let posts = [];
        snapshot.forEach(doc => {
            posts.push({ id: doc.id, ...doc.data() });
        });
        dispatch(getPosts(posts));
    } catch (error) {
        dispatch(postError(error));
    }
};


export const createPostAsync = (post) => async (dispatch) => {
    try {
        const snapshot = await db.collection('Posts').get();
        const id = snapshot.size + 1;
        const timestamp = new Date().toString();

        const newPost = { ...post, id: parseInt(id), rating: 0, all_ratings: [], timestamp: timestamp };
        await db.collection('Posts').add(newPost);
        dispatch(createPost(newPost));
        dispatch(createNotification(
            'success',
            'New Post Created',
            post.header + " was created.",
            post.author
        ));
    } catch (error) {
        dispatch(postError(error));
    }
};


export const updateRating = (postId, direction, activeUserEmail) => async (dispatch) => {
    const post_id = parseInt(postId);

    try {
        const snapshot = await db.collection('Ratings').where('post_id', '==', post_id).where('author', '==', activeUserEmail).get();

        if (snapshot.empty) {
            const newRating = {
                post_id: post_id,
                author: activeUserEmail,
                rating: direction,
            };
            await db.collection('Ratings').add(newRating);
            dispatch(getRating(post_id, activeUserEmail));
        } else {
            snapshot.forEach(doc => {
                if (doc.data().rating === direction) {
                    db.collection('Ratings').doc(doc.id).update({ rating: 0 });

                } else {
                    db.collection('Ratings').doc(doc.id).update({ rating: direction });
                }
                dispatch(getRating(post_id, activeUserEmail));
                return;
            });
        }
    } catch (error) {
        dispatch(postError(error));
    }

};

export const getRating = (postId, activeUserEmail) => async (dispatch) => {
    const post_id = parseInt(postId);

    try {
        const snapshot = await db.collection('Ratings').where('post_id', '==', post_id).get();
        let totalRating = 0;
        snapshot.forEach(doc => {
            totalRating += doc.data().rating;
        });

        const snapshotActiveUser = await db.collection('Ratings').where('post_id', '==', post_id).where('author', '==', activeUserEmail).get();
        let ratingOfActiveUser = 0;
        snapshotActiveUser.forEach(doc => {
            ratingOfActiveUser = doc.data().rating;
        });
        dispatch(setPostRating({ postId: post_id, rating: totalRating, ratingOfActiveUser: ratingOfActiveUser }));

    } catch (error) {
        dispatch(postError(error));
    }
};


