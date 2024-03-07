import { memo } from "react";
import { Button } from "antd";

import { appShallowEqual, operateCount, useAppDispatch, useAppSelector } from "@/store";
import useStyles from "./style";

interface IProps {
  children?: React.ReactNode;
}

const Home: React.FC<IProps> = () => {
  const count = useAppSelector((state) => state.counter.count, appShallowEqual);
  const dispatch = useAppDispatch();
  const { styles } = useStyles();

  return (
    <div>
      <span>{count}</span>
      <Button onClick={() => dispatch(operateCount(1))}>+1</Button>
      <Button onClick={() => dispatch(operateCount(-1))}>-1</Button>
      <div className={styles.card}>Demo</div>
    </div>
  );
};

export default memo(Home);
