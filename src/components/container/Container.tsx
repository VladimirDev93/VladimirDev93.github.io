import { ReactNode } from "react";
import styles from './container.module.scss';

interface IComponentProps {
  children: ReactNode;
}

const Container = ({ children }: IComponentProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container;
