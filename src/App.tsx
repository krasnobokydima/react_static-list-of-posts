import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

type PreparePost = {
  userId: number,
  id: number,
  title: string,
  body: string,
  autor: User | undefined,
  autorComments: Comment | undefined,
};

const preparedPosts: PreparePost[] = [...posts].map((post: Post) => {
  return {
    ...post,
    autor: users.find((user) => user.id === post.userId),
    autorComments: comments.find((comment) => comment.postId === post.id),
  };
});

export const App: React.FC = () => (
  <PostList
    posts={preparedPosts}
  />
);
