import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navBar/navBar';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';
import { Resume } from './components/resume/resume';
import { Contacts } from './components/contacts/contacts';
import { BottomLine } from './components/bottomLine/bottomLine';
import { CreatePost } from './components/blog/createPost/createPost';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('app')}>
      <NavBar />
      <div className={cx('content')}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/newpost" element={<CreatePost />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </div>
      <BottomLine />
    </div>
  );
}

export default App;
