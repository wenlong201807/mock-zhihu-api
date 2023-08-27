import { useState, useEffect } from 'react';
import { loginApi } from '@/api/user';
import { setStorage } from '@/utils/storage';
import './a.scss'

function APage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    loginApi({ name: 'wenlong66', password: '123' }).then((res) => {
      console.log(res);
      setStorage('userInfo', { token: res.data.token });
    });
  }, []);

  return (
    <>
      <div className="testa">two a page</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default APage;
