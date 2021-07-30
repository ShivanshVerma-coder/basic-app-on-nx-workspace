import './style.scss';
import { useCheck } from '@first/data';
import { selector, useRecoilValue } from 'recoil';
import { clicks } from '../constants';

const fontsizeSelector = selector({
  key: 'fontsizeSelector',
  get: ({ get }) => {
    const count = get(clicks);
    const fontSize = 4 * count;
    return [fontSize, count];
  },
});

const Image = () => {
  const [fontSize, count] = useRecoilValue(fontsizeSelector);
  const [Loading, data] = useCheck(count);

  if (Loading == true) {
    console.log(data);
  }
  return <div style={{ fontSize: `${fontSize}px` }}>Image {data}</div>;
};

export default Image;
