import { useRecoilState, useResetRecoilState } from 'recoil';
import Image from './components/Image.jsx';
import { clicks } from './constants';

export function App() {
  const [count, setcount] = useRecoilState(clicks);
  const resetCount = useResetRecoilState(clicks);
  return (
    <div className="app">
      <div style={{ textAlign: 'center' }}>
        <h2>Basic app</h2>
        <h2>No. of Clicks {count}</h2>
        <Image />
        <br></br>
        <button onClick={() => setcount((prevState) => prevState + 1)}>
          Increase{' '}
        </button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}
export default App;
