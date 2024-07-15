import { auth, db, provider } from '../../_api/firebase';
import { getUser, updateUser, getUsers, userError, setActiveUser, setStateLogout } from '../reducers/UserSlice';

export const setLogin = () => async (dispatch) => {
    auth.signInWithPopup(provider).then((res) => {
        dispatch(setActiveUser({
            id: res.user.uid,
            user_name: res.user.email.split('@')[0],
            email: res.user.email,
            display_name: res.user.displayName,
            summary: '',
        }));

        db.collection('Users').where('email', '==', res.user.email).get().then((snapshot) => {
            if (snapshot.empty) {
                db.collection('Users').add({
                    id: res.user.uid,
                    email: res.user.email,
                    user_name: res.user.email.split('@')[0],
                    display_name: res.user.displayName,
                    summary: '',
                });
            }
        }).catch((error) => {
            console.error("Error adding user to Firestore: ", error);
        });
    }).catch((err) => {
        console.log(err.message);
    });
};

export const setLogout = () => async (dispatch) => {
    auth.signOut().then(() => {
        dispatch(setStateLogout());
    }).catch((err) => {
        console.log(err.message);
    });
};

export const getUserAsync = (userId) => async (dispatch) => {
    try {
        const userDoc = await db.collection('Users').doc(userId).get();

        if (userDoc.exists) {
            dispatch(getUser({ id: userDoc.id, ...userDoc.data() }));
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        dispatch(userError(error));
    }
};

export const updateUserAsync = (user) => async (dispatch) => {
    const userRef = db.collection('Users').doc(user.id);
    try {
        const userRef = db.collection('Users').doc(user.id);
        await userRef.update(user);
        dispatch(updateUser(user));

    } catch (error) {
        dispatch(userError(error));
    }
};


export const getUsersAsync = () => async (dispatch) => {
    try {
        const snapshot = await db.collection('Users').get();
        let users = [];
        snapshot.forEach(doc => {
            users.push({ id: doc.id, ...doc.data() });
        });
        dispatch(getUsers(users));
    } catch (error) {
        dispatch(userError(error));
    }
};
