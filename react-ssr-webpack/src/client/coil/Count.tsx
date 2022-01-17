import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "./state";
import s from './style.module.stylus'

const Count = () => {
  const [count, setCount] = useRecoilState(counterState);
  return (
    <div>
      <h1 className={s.heading}>recoil count</h1>
      <h1 className="s_h">recoil count</h1>
      <h1 style={{color: 'red'}}>recoil count</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Count;
