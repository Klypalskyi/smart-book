export const getUser = state => state.user;
export const getUserToken = state => state.session.token;
export const getIsModalOpen = state => state.isModalOpen;
export const getAuthenticated = state => state.session.authenticated;
export const getFullName = state => state.user.name.fullName;
