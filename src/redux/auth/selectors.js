export const selectUser = state => state.auth.user.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectError = state => state.auth.error;