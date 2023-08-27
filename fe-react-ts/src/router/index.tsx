// Suspense 包裹懒加载组件, 暂不用懒加载，影响首次加载的页面动画过渡
// import { lazy, Suspense } from 'react';
// const Course = lazy(() => import('../pages/course'));
// const Login = lazy(() => import('../pages/login'));

import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation, useNavigationType, useRoutes } from 'react-router-dom';

// oneClass
import APage from '@/pages/oneClass/aPage/a';
import BPage from '@/pages/oneClass/bPage/b';

// twoClass
import ATwoPage from '@/pages/twoClass/aPage/a';
import BTwoPage from '@/pages/twoClass/bPage/b';
// 登陆
// import Login from '../pages/login';
// import Register from '../pages/register';

const routes = [
  {
    path: '/aPage',
    element: <APage />
  },
  {
    path: '/bPage',
    element: <BPage />
  },
  {
    path: '/aTwoPage',
    element: <ATwoPage />
  },
  {
    path: '/bTwoPage',
    element: <BTwoPage />
  },
  
  // {
  //   path: '/login',
  //   element: <Login />
  // },
  // {
  //   path: '/register',
  //   element: <Register />
  // },
  // {
  //   path: '*',
  //   element: <Course />
  // }
];

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
  REPLACE: 'forward'
};

// 哪些页面需要去掉路由跳转动画
const DELETE_ROUTER_ANI = ['/bTwoPage'];

const Router = () => {
  const location = useLocation();
  const action = useNavigationType();
  let className = ANIMATION_MAP[action];
  if (DELETE_ROUTER_ANI.includes(location.pathname)) {
    className = '';
  }

  return (
    <TransitionGroup
      childFactory={(child) =>
        React.cloneElement(child, { classNames: className })
      }
      className={'router-wapper'}
    >
      <CSSTransition timeout={300} key={location.pathname}>
        {useRoutes(routes)}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Router;
