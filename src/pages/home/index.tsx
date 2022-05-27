import { FC } from 'react';
import CounterAnimate from '@/components/conter-aninate';
import style from './index.module.scss';
const Home: FC = () => {
    return (
        <div className={style.home}>
            <CounterAnimate />
            <div className={style['home__other']}>
                <a href="https://github.com/CiroLee/mew-cli" target="_blank" rel="noreferrer">
                    mew-cli
                </a>
                <a href="https://recoiljs.org/zh-hans/docs/introduction/getting-started">Recoil</a>
                <a href="https://zh-hans.reactjs.org/">react</a>
                <a href="https://reactrouter.com/docs/en/v6">react-router(v6)</a>
            </div>
        </div>
    );
};

export default Home;
