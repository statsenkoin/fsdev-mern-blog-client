import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from 'components';

const Home = lazy(() => import('pages/Home/Home'));
const Posts = lazy(() => import('pages/Posts/Posts'));
const Post = lazy(() => import('pages/Post/Post'));
const AddPost = lazy(() => import('pages/AddPost/AddPost'));
const EditPost = lazy(() => import('pages/EditPost/EditPost'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/:id" element={<Post />}></Route>
        <Route path="/add_post" element={<AddPost />}></Route>
        <Route path="/edit_post" element={<EditPost />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}
