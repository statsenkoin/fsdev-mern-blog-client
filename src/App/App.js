import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Layout } from 'Layout/Layout';
import { useAuthSelector } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';

const Home = lazy(() => import('pages/Home/Home'));
const Posts = lazy(() => import('pages/Posts/Posts'));
const Post = lazy(() => import('pages/Post/Post'));
const AddPost = lazy(() => import('pages/AddPost/AddPost'));
const EditPost = lazy(() => import('pages/EditPost/EditPost'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export function App() {
  const dispatch = useDispatch();
  const { isLoggedIn, isRefreshing } = useAuthSelector();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>REFRESHING USER...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="posts/:postId" element={<Post />} />
        </Route>
        <Route
          path="/add_post"
          element={!isLoggedIn ? <Navigate to="/login" /> : <AddPost />}
        />
        <Route
          path="/edit_post"
          element={!isLoggedIn ? <Navigate to="/login" /> : <EditPost />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/posts" /> : <Register />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/posts" /> : <Login />}
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
