import { useSelector } from 'react-redux';

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectStatus = (state) => state.auth.status;

export const useAuthSelector = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const status = useSelector(selectStatus);

  return { user, token, isLoggedIn, isRefreshing, status };
};
