import { useState, useEffect } from 'react';
import { loginApi } from '@/api/user';
import { setStorage } from '@/utils/storage';
import { useNavigate } from 'react-router-dom';
import './a.scss'

function APage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    loginApi({ name: 'wenlong66', password: '123' }).then((res) => {
      console.log(res);
      setStorage('userInfo', { token: res.data.token });
    });
  }, []);


  const navigate = useNavigate();

  // 页面跳转
  const move = (url: string) => {
    navigate(url); // move('/certificate')
  };


  return (
    <>
      <div className="testa" onClick={() => move('/bPage')}>a page to bPage</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default APage;
