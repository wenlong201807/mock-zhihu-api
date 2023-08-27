// import React from 'react'
import App from './App.tsx';
import './index.css';

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

// oneClass
import APage from '@/pages/oneClass/aPage/a';
import BPage from '@/pages/oneClass/bPage/b';

// twoClass
import ATwoPage from '@/pages/twoClass/aPage/a';
import BTwoPage from '@/pages/twoClass/bPage/b';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // element: (
    //   <div>
    //     <h1>Hello World</h1>
    //     <Link to="about">About Us</Link>
    //   </div>
    // ),
  },
  {
    path: '/aPage',
    element: <APage />,
  },
  {
    path: '/bPage',
    element: <BPage />,
  },
  {
    path: '/aTwoPage',
    element: <ATwoPage />,
  },
  {
    path: '/bTwoPage',
    element: <BTwoPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <div>
    <div>
      asdfasdfasd
      {/* <Link to="/aTwoPage">/aTwoPage</Link>
      <Link to="/bTwoPage">/bTwoPage</Link>
      <Link to="/bPage">/bPage</Link> */}
    </div>
    <RouterProvider router={router} />
  </div>
);
// https://reactrouter.com/en/main/start/overview
// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
