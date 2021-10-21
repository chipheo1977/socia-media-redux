import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features//posts/postsSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";
import usersReducer from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer
  }
});
