import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let dialogs = [
  {
    id: "1",
    name: "Dima",
  },  
  {
    id: "2",
    name: "Ivan",
  },
  {
    id: "3",
    name: "Sveta",
  },
  {
    id: "4",
    name: "Misha",
  },
];

const messages = [
  {
    id: "1",
    message: "Hi",
  },
  {
    id: "2",
    message: "How are you",
  },
  {
    id: "3",
    message: "Yo",
  },
];

let posts = [
  {
    id: 1,
    message: "Hi how are you?",
    likeCount: 12,
  },
  {
    id: 2,
    message: "Its my first post",
    likeCount: 32,
  },
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs ={dialogs} messages ={messages} posts = {posts}/>
    
  </React.StrictMode>
);


