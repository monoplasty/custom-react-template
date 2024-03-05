import { memo } from "react";
import { Button } from "antd";

import { appShallowEqual, operateCount, useAppDispatch, useAppSelector } from "@/store";

interface IProps {
  children?: React.ReactNode;
}

const Home: React.FC<IProps> = () => {
  const count = useAppSelector((state) => state.counter.count, appShallowEqual);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>{count}</span>
      <Button onClick={() => dispatch(operateCount(1))}>+1</Button>
      <Button onClick={() => dispatch(operateCount(-1))}>-1</Button>
    </div>
  );
};

export default memo(Home);
