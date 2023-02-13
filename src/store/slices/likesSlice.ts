import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getLocalStorageLikes,  toggleLocalStorageLike} from "../../helpers/localstorage";

const initialState = {
    likesList: getLocalStorageLikes()
}
 const likesSlice = createSlice(
    {
        name: "likeSlice",
        initialState,
        reducers: {
            toggleLike: (state, action:PayloadAction<string>) => {
                state.likesList = toggleLocalStorageLike(action.payload);
            }
        }
    }
)

export const {
    toggleLike
} = likesSlice.actions;

export default likesSlice.reducer;