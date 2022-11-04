import { useRef, useState } from 'react';
import classNames from 'classnames';
import { useCounterState } from '@/store/counter';
import style from './index.module.scss';
const CounterAnimate = () => {
  const numRef = useRef<HTMLParagraphElement | null>(null);
  const count = useCounterState((state) => state.count);
  const increamentCount = useCounterState((state) => state.increament);
  const resetCounter = useCounterState((state) => state.reset);
  const [isAnimate, setAnimate] = useState(false);
  const changeCounter = (step: number) => {
    setAnimate(true);
    increamentCount(step);
    numRef.current?.addEventListener('animationend', () => {
      setAnimate(false);
    });
  };
  return (
    <div className={style.counter}>
      <div className={style['counter__show']}>
        <p ref={numRef} className={classNames(style['counter__num'], { [style.bounce]: isAnimate })}>
          {count}
        </p>
      </div>
      <div className={style['counter__operate']}>
        <div className={style['counter__button--group']}>
          <button className={style.btn} onClick={() => changeCounter(1)}>
            +
          </button>
          <button className={style.btn} onClick={() => changeCounter(-1)}>
            -
          </button>
        </div>
        <button className={classNames(style.btn, style['coutner__reset'])} onClick={resetCounter}>
          reset
        </button>
      </div>
    </div>
  );
};

export default CounterAnimate;
