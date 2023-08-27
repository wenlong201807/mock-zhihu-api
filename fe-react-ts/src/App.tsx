import { FC } from 'react';

// import Router from './router';
import { useNavigate, useLocation } from 'react-router-dom';

const App: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 页面跳转
  const move = (url: string) => {
    navigate(url); // move('/certificate')
  };

  console.log(location);

  return (
    <div className="App_wrap">
      <div onClick={()=>move('/aPage')}>header</div>
    </div>
  );
};

export default App;
