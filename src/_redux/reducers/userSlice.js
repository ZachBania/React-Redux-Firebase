import { createSlice } from '@reduxjs/toolkit'

// const [userName, setUserName] = useState(null)
// const [userEmail, setUserEmail] = useState(null)
const initialState = {
    userName: null,
    userEmail: null,
}

// Initial State
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
        state.userName = action.payload.userName
        state.userEmail = action.payload.userEmail
    },
    setUserLogOutState: state => {
        state.userName = null
        state.userEmail = null
    }
  }
});

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail

export const {setActiveUser, setUserLogOutState} = userSlice.actions
export default userSlice.reducer