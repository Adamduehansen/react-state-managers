import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotImplemented from './routes/NotImplemented';
import Redux from './routes/Redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/redux',
        element: <Redux />,
      },
      {
        path: '/zustand',
        element: <NotImplemented />,
      },
      {
        path: '/jotai',
        element: <NotImplemented />,
      },
      {
        path: '/xstate',
        element: <NotImplemented />,
      },
      {
        path: '/mobx',
        element: <NotImplemented />,
      },
      {
        path: '/valtio',
        element: <NotImplemented />,
      },
      {
        path: '/recoil',
        element: <NotImplemented />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
