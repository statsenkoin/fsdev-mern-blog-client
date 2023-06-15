import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

import { MainPage } from './pages/MainPage';
import { PostsPage } from './pages/PostsPage';
import { PostPage } from './pages/PostPage';
import { AddPostPage } from './pages/AddPostPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/posts" element={<PostsPage />}></Route>
        <Route path="/:id" element={<PostPage />}></Route>
        <Route path="/new_post" element={<AddPostPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
